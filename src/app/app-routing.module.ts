import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatcComponent } from './components/contatc/contatc.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { MediaComponent } from './components/media/media.component';
import { OrderTrackingComponent } from './components/order-tracking/order-tracking.component';
import { DeliveryPolicyComponent } from './components/delivery-policy/delivery-policy.component';
import { PaymentPolicyComponent } from './components/payment-policy/payment-policy.component';
import { PrivacyPolixyComponent } from './components/privacy-polixy/privacy-polixy.component';
import { PaymentComponent } from './components/payment/payment.component';
import { EventReadComponent } from './components/event-read/event-read.component';
   

const routes: Routes = [
  {path:'', component:HomeComponent , title:'Smile Agents '},
  {path:'About_Us', component:AboutComponent , title:'Smile Agent  About US '},
  {path:'Contact', component:ContatcComponent , title:'Smile Agent  Contact '},
  {path:'Products', component:ProductsComponent , title:'Smile Agent  Products '},
  {path:'Products_Views', component:ProductViewComponent , title:'Smile Agent  Products '},
  {path:'Pro', component:ProductComponent , title:'Smile Agent  Products '},
  {path:'Cart', component:CartComponent , title:'Smile Agent Cart '},
  {path:'Checkout', component:CheckOutComponent , title:'Smile Agent Checkout '},
  {path:'Login', component:LoginComponent , title:'Smile Agent Login '},
  {path:'Signup', component:SignupComponent , title:'Smile Agent Signup '},
  {path:'Thanks', component:ThanksComponent , title:'Smile Agent Order Placed '},
  {path:'Orders', component:AccountsComponent , title:'Smile Agent Orders '},
  {path:'events', component:MediaComponent , title:'Smile Agent events '},
  {path:'Order_Tracking', component:OrderTrackingComponent , title:'Smile Agent Order Tracking  '},
  {path:'Delivery_policy', component:DeliveryPolicyComponent , title:'Smile Agent Delivery Policy  '},
  {path:'Payment_policy', component:PaymentPolicyComponent , title:'Smile Agent Payment Policy  '},
  {path:'Privacy_policy', component:PrivacyPolixyComponent , title:'Smile Agent Privacy Policy  '},
  {path:'payment', component:PaymentComponent , title:'Payment  '},
  {path:'event_read', component:EventReadComponent , title:'Event Read  '},

  
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
