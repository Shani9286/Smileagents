import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {
  @ViewChild('progressBar', { static: true }) progressBar!: ElementRef;
  @ViewChild('processed', { static: true }) processed!: ElementRef;
  @ViewChild('shipped', { static: true }) shipped!: ElementRef;
  @ViewChild('enroute', { static: true }) enroute!: ElementRef;
  @ViewChild('arrived', { static: true }) arrived!: ElementRef;

  private timeline = gsap.timeline();

  ngOnInit() {
    this.animateProgress();
  }

  animateProgress() {
    this.timeline
      .from(this.processed.nativeElement, { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%", duration: 0.1 })
      .set(this.progressBar.nativeElement, { autoAlpha: 1 })
      .fromTo(this.progressBar.nativeElement, { width: '0%' }, { width: '30%', duration: 0.5 })
      .from(this.shipped.nativeElement, { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%", duration: 0.1 }, '-=0.15')
      .fromTo(this.progressBar.nativeElement, { width: '30%' }, { width: '60%', duration: 0.5 })
      .from(this.enroute.nativeElement, { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%", duration: 0.1 }, '-=0.15')
      .fromTo(this.progressBar.nativeElement, { width: '60%' }, { width: '100%', duration: 0.5 })
      .from(this.arrived.nativeElement, { autoAlpha: 0, scale: 0, transformOrigin: "50% 50%", duration: 0.1 }, '-=0.15');
  }
}
