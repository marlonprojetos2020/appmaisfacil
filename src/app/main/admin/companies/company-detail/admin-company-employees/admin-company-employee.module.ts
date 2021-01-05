import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {AdminCompanyEmployeeComponent} from './admin-company-employee/admin-company-employee.component';
import {AdminCompanyNewEmployeeModule} from './admin-company-new-employee/admin-company-new-employee.module';
import {AdminCompanyEmployeeRoutingModule} from './admin-company-employee-routing.module';

@NgModule({
    imports: [CommonModule, PoPageModule, AdminCompanyNewEmployeeModule, AdminCompanyEmployeeRoutingModule],
    declarations: [AdminCompanyEmployeeComponent],
})
export class AdminCompanyEmployeeModule {
}
