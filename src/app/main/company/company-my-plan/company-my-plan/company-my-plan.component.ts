import { Component, OnInit } from '@angular/core';
import { CompanyDashboardService } from '../../company-dashboard/company-dashboard.service';

@Component({
  selector: 'app-company-my-plan',
  templateUrl: './company-my-plan.component.html',
  styleUrls: ['./company-my-plan.component.scss']
})
export class CompanyMyPlanComponent {

  user$ = this.companyService.getProfile();

  constructor(private companyService: CompanyDashboardService) {}
}
