import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStoreProductComponent } from './card-store-product.component';

describe('CardStoreProductComponent', () => {
  let component: CardStoreProductComponent;
  let fixture: ComponentFixture<CardStoreProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStoreProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStoreProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
