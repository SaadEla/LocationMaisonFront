import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLocationComponent } from './ajouter-location.component';

describe('AjouterLocationComponent', () => {
  let component: AjouterLocationComponent;
  let fixture: ComponentFixture<AjouterLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
