import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilHoteComponent } from './accueil-hote.component';

describe('AccueilHoteComponent', () => {
  let component: AccueilHoteComponent;
  let fixture: ComponentFixture<AccueilHoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilHoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilHoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
