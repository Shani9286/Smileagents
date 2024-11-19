import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReadComponent } from './event-read.component';

describe('EventReadComponent', () => {
  let component: EventReadComponent;
  let fixture: ComponentFixture<EventReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
