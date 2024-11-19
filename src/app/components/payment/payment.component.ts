import { Component } from '@angular/core';
import { DataEncryptService } from 'src/app/services/data-encrypt.service';
import { RequestService } from 'src/app/services/request.service';
import { ActivatedRoute } from '@angular/router';
declare const Moyasar: any;
import Swal from 'sweetalert2';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cart_data: any;
  user: any;
  totalPrice: any;
  paymentStatus: string = '';
  transactionId: string = '';
  loading:boolean = false;

  constructor(private api: RequestService, private DataEncrypt: DataEncryptService, private route: ActivatedRoute) {
    if (localStorage.getItem('user')) {
      const loginusers: any = localStorage.getItem('user');
      this.user = this.DataEncrypt.decryptUserData(loginusers);
    }
  }
  ngOnInit() {
    // this.order();
    this.order();
    this.route.queryParams.subscribe(params => {
      this.paymentStatus = params['status'] || 'unknown';
      this.transactionId = params['transaction_id'] || '';
      

      // Check if payment status is "success" and show an alert
      if (this.paymentStatus === 'paid') {
        let data = localStorage.getItem('dataa');
        let d = JSON.parse(data!)
        const payment_status = d.payment_status = 'Paid'
          const payment_method = d.payment_method = 'Moyasar'
        console.log(d)
        this.order_done(d)
        // this.order(d);

      } else if (this.paymentStatus === 'failed') {
        Swal.fire({
          title: 'Order Failed!',
          text: params['message'],
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    });




  }
  initiatePayment() {
    // Check if Moyasar is loaded
    Moyasar.init({
      element: '.mysr-form',

      amount: 1000.00,
      currency: 'SAR',
      description: 'Coffee Order #1',
      publishable_api_key: 'pk_test_JMopHRy8a1nzgJwkKpW3oNyTKddWvhzUBS1NQEJ8',
      callback_url: 'http://localhost:4200/payment',
      methods: ['creditcard'],

    });

    if (typeof Moyasar === 'undefined') {
      console.error('Moyasar is not defined. Please check if the script has loaded.');
      alert('Payment service is not available. Please try again later.');
      return;
    }

    // Check if the form element exists
    const formElement = document.querySelector('.mysr-form');

    if (!formElement) {
      console.error('Payment form element not found. Please ensure it exists in the DOM.');
      alert('Payment form is not available. Please try again later.');

      return;
    }

    // Initialize Moyasar payment

  }

  order() {
    this.loading = true
    this.api.post('temp_order/all', { "customer_id": this.user.id }).subscribe(
      (res: any) => {
        this.cart_data = res.data;
        console.log(this.cart_data)
        this.initiatePayment();
        this.loading = false
      })
  }


  pp(a: any) {
    console.log(a)
    if (a.v_id == null) {
      return a.product.price
    }
    else {
      const result = a.product.variant.find((item: any) => item.id == a.v_id);
      return result.pirce

    }

  }

  var_name(v_id: any, pro: any) {

    if (pro.variant.length > 0) {

      const result = pro.variant.find((item: any) => item.id == v_id);
      return `( ${result.name} )`;
    }
    return;
  }

  totalPrices(cart: any) {
    let final_pr: number = 0; // Initialize final price

    const updatedCart = cart?.temp_order_list.map((item: any) => {
      let totalPrice = 0;

      // Check if the item type is 'Single'
      if (item.type === 'Single') {
        totalPrice = parseFloat(item.price) * item.qty; // Multiply price by quantity
      } else {
        totalPrice = parseFloat(item.price); // Just add the price if it's not 'Single'
      }

      // Add the total price for this item to the final price
      final_pr += totalPrice;

      // Return the item with the computed total price
      return {
        ...item,
        totalPrice: totalPrice.toFixed(2), // Add totalPrice property formatted to 2 decimal places
      };
    });


    this.totalPrice = final_pr.toFixed(2)


  }


  order_done(d: any) {
    this.loading = true;
    this.api.post('order/add', d).subscribe(
      (res: any) => {
        // Success case
        this.loading = false;
        Swal.fire({
          title: 'Order Confirmed!',
          text: 'Thank you! Your order has been placed successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      },
      (error: any) => {
        // Error case
        this.loading = false;
        Swal.fire({
          title: 'Order Failed',
          text: 'There was an issue processing your order. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        console.error('Order Error:', error);
      }
    );
  }
  
}
