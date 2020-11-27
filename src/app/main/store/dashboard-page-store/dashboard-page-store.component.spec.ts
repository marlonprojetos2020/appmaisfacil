import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageStoreComponent } from './dashboard-page-store.component';

describe('DashboardPageStoreComponent', () => {
  let component: DashboardPageStoreComponent;
  let fixture: ComponentFixture<DashboardPageStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPageStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPageStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
