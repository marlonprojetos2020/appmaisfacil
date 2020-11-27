import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBalanceComponent } from './store-balance.component';

describe('StoreBalanceComponent', () => {
  let component: StoreBalanceComponent;
  let fixture: ComponentFixture<StoreBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
