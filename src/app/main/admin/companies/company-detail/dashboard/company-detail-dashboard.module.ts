import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageModule } from '@po-ui/ng-components';
import { CompanyDetailDashboardComponent } from './dashboard/company-detail-dashboard.component';

@NgModule({
    declarations: [CompanyDetailDashboardComponent],
    imports: [
        CommonModule,
        PoPageModule,
    ],
    exports: [CompanyDetailDashboardComponent],
})
export class CompanyDetailDashboardModule {}
