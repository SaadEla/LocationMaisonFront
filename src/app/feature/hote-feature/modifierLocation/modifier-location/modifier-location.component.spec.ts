import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierLocationComponent } from './modifier-location.component';

describe('ModifierLocationComponent', () => {
  let component: ModifierLocationComponent;
  let fixture: ComponentFixture<ModifierLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
