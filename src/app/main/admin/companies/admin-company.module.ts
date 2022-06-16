import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminCompanyRoutingModule } from './admin-company-routing.module';
import { CompanyListModule } from './company-list/company-list.module';
import { CompanyNewModule } from './company-new/company-new.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AdminCompanyRoutingModule,
        CompanyListModule,
        CompanyNewModule,
    ],
    exports: [],
})
export class AdminCompanyModule {}
