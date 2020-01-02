import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCatalogueComponent } from './public-catalogue.component';

describe('PublicCatalogueComponent', () => {
  let component: PublicCatalogueComponent;
  let fixture: ComponentFixture<PublicCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
