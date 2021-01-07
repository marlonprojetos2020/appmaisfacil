import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoContainerModule, PoFieldModule } from '@po-ui/ng-components';
import { CompanyEmployeeComponent } from './company-employee/company-employee.component';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    // tslint:disable-next-line:max-line-length
    imports: [CommonModule, PoContainerModule, PoFieldModule, PageDatatableModule],
    declarations: [CompanyEmployeeComponent],
})
export class CompanyEmployeeModule {
}
