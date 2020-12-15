import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailRoutingModule } from './company-detail-routing.module';
import { CompanyDetailDashboardModule } from './dashboard/company-detail-dashboard.module';
import { CompanyEditModule } from '../company-edit/company-edit.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        CompanyDetailRoutingModule,
        CompanyDetailDashboardModule,
        CompanyEditModule,
    ],
})
export class CompanyDatailModule {}
