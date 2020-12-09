import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageModule } from '@po-ui/ng-components';
import { CompanyDetailDashboardComponent } from './dashboard/company-detail-dashboard.component';
import { CompanyDetailService } from '../company-detail.service';

@NgModule({
    declarations: [CompanyDetailDashboardComponent],
    imports: [
        CommonModule,
        PoPageModule,
    ],
    exports: [CompanyDetailDashboardComponent],
    providers: [CompanyDetailService]
})
export class CompanyDetailDashboardModule {}