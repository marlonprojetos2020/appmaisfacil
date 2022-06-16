import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyMyPlanComponent } from './company-my-plan/company-my-plan.component';
import { PoContainerModule, PoPageModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [CompanyMyPlanComponent],
  imports: [
    CommonModule,
    PoPageModule,
    PoContainerModule,
  ],
})
export class CompanyMyPlanModule {}
