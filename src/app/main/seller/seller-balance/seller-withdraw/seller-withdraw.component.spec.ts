import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerWithdrawComponent } from './seller-withdraw.component';

describe('StoreWithdrawComponent', () => {
  let component: SellerWithdrawComponent;
  let fixture: ComponentFixture<SellerWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
