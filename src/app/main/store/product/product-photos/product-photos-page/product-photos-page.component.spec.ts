import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPhotosPageComponent } from './product-photos-page.component';

describe('ProductPhotosPageComponent', () => {
  let component: ProductPhotosPageComponent;
  let fixture: ComponentFixture<ProductPhotosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPhotosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPhotosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
