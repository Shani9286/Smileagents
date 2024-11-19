import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import {  EventEmitter, HostListener, Output } from '@angular/core';
  import { AES } from 'crypto-js';
import { FormBuilder, Validators } from '@angular/forms';
import { DataEncryptService } from '../../../app/services/data-encrypt.service';
import Swal from 'sweetalert2';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
@Component({
  selector: 'app-event-read',
  templateUrl: './event-read.component.html',
  styleUrls: ['./event-read.component.css']
})
export class EventReadComponent {

  event:any
   selected_blog: any;
  loading : boolean = false
  categoryId: any;
  constructor(private api:RequestService , private route: ActivatedRoute, private DataEncrypt : DataEncryptService ,private router: Router){

  this.route.queryParams.subscribe(params => {
    const encryptedId = params['page'];

    if (encryptedId) {
      // Decrypt the ID
      const decryptedId = this.DataEncrypt.decryptUserData(encryptedId);
   

      // Now you can use the decryptedId to load data or perform other actions
      this.categoryId = decryptedId;
    
      this.read_event();
    

    }
  })

}
  
  
oneventClick(item: any) {
 
  const encryptedId = this.DataEncrypt.encryptUserData(item.id);

// Navigate with the ID as a query parameter
this.router.navigate(['/event_read'], { queryParams: { page: encryptedId } });   

}
  



  read_event(){

    this.loading = true
    this.api.post(`event/workshops_details`,{id : this.categoryId}).subscribe((res: any) => {
    this.selected_blog = res.data.workshop
    this.event = res.data.Related
      this.loading = false
    })
  }




  isUpcoming(eventDate: string): boolean {
    const today = new Date();
    const event = new Date(eventDate);
    return event > today;
  }
}
