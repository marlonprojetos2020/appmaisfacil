import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoContainerModule,
    PoFieldModule,
    PoModalModule,
} from '@po-ui/ng-components';
import { CompanyEmployeeComponent } from './company-employee/company-employee.component';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';
import { CompanyNewEmployeeModule } from './company-new-employee/company-new-employee.module';
import { CompanyEmployeeRoutingModule } from './company-employee-routing.module';
import { CompanyEditEmployeeModule } from './company-edit-employee/company-edit-employee.module';

@NgModule({
    // tslint:disable-next-line:max-line-length
    imports: [
        CommonModule,
        PoContainerModule,
        PoFieldModule,
        PageDatatableModule,
        CompanyNewEmployeeModule,
        CompanyEmployeeRoutingModule,
        PoModalModule,
        CompanyEditEmployeeModule,
    ],
    declarations: [CompanyEmployeeComponent],
})
export class CompanyEmployeeModule {}
