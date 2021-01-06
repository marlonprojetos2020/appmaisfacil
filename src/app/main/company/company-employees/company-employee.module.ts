import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoContainerModule, PoFieldModule, PoPageModule} from '@po-ui/ng-components';
import {CompanyEmployeeComponent} from './company-employee/company-employee.component';
import {NewEmployeeModule} from './new-employee/new-employee.module';
import {CompanyEmployeeRountingModule} from './company-employee-rounting.module';
import {PageDatatableModule} from '../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    // tslint:disable-next-line:max-line-length
    imports: [CommonModule, PoContainerModule, PoPageModule, PoFieldModule, NewEmployeeModule, CompanyEmployeeRountingModule, PageDatatableModule],
    declarations: [CompanyEmployeeComponent],
})
export class CompanyEmployeeModule {
}
