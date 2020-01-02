import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTouristeComponent } from './message-touriste.component';

describe('MessageTouristeComponent', () => {
  let component: MessageTouristeComponent;
  let fixture: ComponentFixture<MessageTouristeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageTouristeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTouristeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
