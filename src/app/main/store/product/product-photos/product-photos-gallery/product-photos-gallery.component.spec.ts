import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPhotosGalleryComponent } from './product-photos-gallery.component';

describe('ProductPhotosGalleryComponent', () => {
  let component: ProductPhotosGalleryComponent;
  let fixture: ComponentFixture<ProductPhotosGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPhotosGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPhotosGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
