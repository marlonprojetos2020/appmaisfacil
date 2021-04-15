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
import { HelpPopoverModule } from 'src/app/shared/directives/help-popover/help-popover.module';

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
        HelpPopoverModule,
    ],
    declarations: [CompanyEmployeeComponent],
})
export class CompanyEmployeeModule {}
