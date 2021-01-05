import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {CompanyEmployeeComponent} from './company-employee/company-employee.component';
import {NewEmployeeModule} from './new-employee/new-employee.module';
import {CompanyEmployeeRountingModule} from './company-employee-rounting.module';

@NgModule({
    imports: [CommonModule, PoPageModule, NewEmployeeModule, CompanyEmployeeRountingModule],
    declarations: [CompanyEmployeeComponent],
})
export class CompanyEmployeeModule{}
