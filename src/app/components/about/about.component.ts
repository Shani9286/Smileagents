import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';  // If you're using ng-bootstrap
declare var bootstrap: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  faqs = [
    { question: 'Personalized, Patient-Centered Care', answer: ' At SmileAgent, we understand that each patient has unique needs, concerns, and dental health goals. Our dentists take the time to listen and create customized treatment plans, ensuring every visit is comfortable, informative, and focused on achieving the best results.' },

    { question: 'State-of-the-Art Technology', answer: 'Our team consists of highly trained and experienced dental professionals who stay up-to-date with the latest advancements in dentistry. With expertise in general, cosmetic, and specialized dental treatments, our professionals are committed to providing top-quality care in a compassionate environment.' },

    { question: 'Experienced and Skilled Dental Team', answer: ' We use advanced dental technology to ensure that procedures are more efficient, precise, and comfortable for our patients. From digital X-rays and 3D imaging to laser dentistry and modern anesthesia options, SmileAgent ensures a higher standard of care with less discomfort and faster recovery times.' },


    { question: 'Comprehensive Range of Services', answer: 'Whether it’s preventive, restorative, or cosmetic dentistry, SmileAgent provides a complete spectrum of services under one roof. From routine cleanings and exams to teeth whitening, implants, and orthodontics, we’re a one-stop destination for all dental needs, making care convenient and accessible' },

    { question: 'Flexible Payment Options and Insurance Assistance', answer: ' We strive to make dental care affordable for everyone. SmileAgent offers flexible financing options and works with various insurance providers to maximize patient benefits, making quality care more accessible without compromising on service or results.' },
    
  ];

// faq.component.ts

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // Bootstrap Collapse JavaScript can be used if you are managing collapse manually.
  }

  toggleCollapse(index: number): void {
    const collapseElement = document.getElementById(`faqCollapse-${index}`);
    if (collapseElement) {
      const bsCollapse = new bootstrap.Collapse(collapseElement, {
        toggle: true
      });
      bsCollapse.toggle();
    }
  }
}
