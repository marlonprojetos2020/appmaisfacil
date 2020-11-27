import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerBalanceComponent } from './seller-balance.component';

describe('StoreBalanceComponent', () => {
  let component: SellerBalanceComponent;
  let fixture: ComponentFixture<SellerBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
