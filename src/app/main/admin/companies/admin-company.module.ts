import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminCompanyRoutingModule } from './admin-company-routing.module';
import { CompanyListModule } from './company-list/company-list.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AdminCompanyRoutingModule,
        CompanyListModule
    ],
    exports: [],
})
export class AdminCompanyModule {}