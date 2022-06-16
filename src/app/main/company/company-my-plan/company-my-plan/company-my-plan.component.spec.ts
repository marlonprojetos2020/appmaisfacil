import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMyPlanComponent } from './company-my-plan.component';

describe('CompanyMyPlanComponent', () => {
  let component: CompanyMyPlanComponent;
  let fixture: ComponentFixture<CompanyMyPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMyPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
