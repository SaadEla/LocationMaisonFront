import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageHoteComponent } from './message-hote.component';

describe('MessageHoteComponent', () => {
  let component: MessageHoteComponent;
  let fixture: ComponentFixture<MessageHoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageHoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageHoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
