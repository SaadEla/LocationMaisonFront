import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilTouristeComponent } from './accueil-touriste.component';

describe('AccueilTouristeComponent', () => {
  let component: AccueilTouristeComponent;
  let fixture: ComponentFixture<AccueilTouristeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilTouristeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilTouristeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
