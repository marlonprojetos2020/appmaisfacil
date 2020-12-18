import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {CompanyEmployeeComponent} from './company-employee/company-employee.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [CompanyEmployeeComponent],
})
export class CompanyEmployeeModule{}
