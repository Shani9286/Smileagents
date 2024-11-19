import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
 import { AES } from 'crypto-js';
import { FormBuilder, Validators } from '@angular/forms';
import { DataEncryptService } from '../../../app/services/data-encrypt.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  event:any
  screen : any = 'main'
  selected_blog: any;
  loading : boolean = false
  constructor(private api:RequestService , private DataEncrypt : DataEncryptService ,private router: Router){
  this.all()

  }

  truncateText(text: string, wordLimit: number): string {
    if (!text) return '';

    const wordsArray = text.split(' ');  // Split text by spaces
    if (wordsArray.length > wordLimit) {
      return wordsArray.slice(0, wordLimit).join(' ') + '...';  // Join the first 'wordLimit' words and add '...'
    }

    return text;  // Return the original text if it's within the limit
  }


  all(){
    this.loading = true
    this.api.post(`event/all`,true).subscribe((res: any) => {
      this.event = res.data;
      this.loading = false
    })
  }

  read_event(item:any){
    this.selected_blog = item
    this.screen = 'read_view'
  }



  isUpcoming(eventDate: string): boolean {
    const today = new Date();
    const event = new Date(eventDate);
    return event > today;
  }
  oneventClick(item: any) {
 
       const encryptedId = this.DataEncrypt.encryptUserData(item.id);

    // Navigate with the ID as a query parameter
    this.router.navigate(['/event_read'], { queryParams: { page: encryptedId } });   

  }
}
