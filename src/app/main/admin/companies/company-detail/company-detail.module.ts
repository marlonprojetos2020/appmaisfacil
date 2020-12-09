import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailRoutingModule } from './company-detail-routing.module';
import { CompanyDetailDashboardModule } from './dashboard/company-detail-dashboard.module'
import { CompanyDetailService } from './company-detail.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        CompanyDetailRoutingModule,
        CompanyDetailDashboardModule,
    ],
    providers: [CompanyDetailService]
})
export class CompanyDatailModule {}