import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoContainerModule, PoFieldModule } from '@po-ui/ng-components';
import { CompanyEmployeeComponent } from './company-employee/company-employee.component';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';
import { CompanyNewEmployeeModule } from './company-new-employee/company-new-employee.module';
import { CompanyEmployeeRoutingModule } from './company-employee-routing.module';

@NgModule({
    // tslint:disable-next-line:max-line-length
    imports: [
        CommonModule,
        PoContainerModule,
        PoFieldModule,
        PageDatatableModule,
        CompanyNewEmployeeModule,
        CompanyEmployeeRoutingModule,
    ],
    declarations: [CompanyEmployeeComponent],
})
export class CompanyEmployeeModule {}
