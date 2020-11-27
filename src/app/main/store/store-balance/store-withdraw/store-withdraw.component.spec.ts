import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreWithdrawComponent } from './store-withdraw.component';

describe('StoreWithdrawComponent', () => {
  let component: StoreWithdrawComponent;
  let fixture: ComponentFixture<StoreWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
