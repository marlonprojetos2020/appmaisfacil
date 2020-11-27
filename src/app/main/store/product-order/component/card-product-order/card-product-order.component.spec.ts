import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductOrderComponent } from './card-product-order.component';

describe('CardProductOrderComponent', () => {
  let component: CardProductOrderComponent;
  let fixture: ComponentFixture<CardProductOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProductOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
