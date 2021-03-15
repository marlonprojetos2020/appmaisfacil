import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCompanyEmployeeComponent } from './admin-company-employee/admin-company-employee.component';
import { EmployeeListModule } from '../../../shared/employee-list/employee-list.module';


@NgModule({
    declarations: [AdminCompanyEmployeeComponent],
    imports: [
        CommonModule,
        EmployeeListModule],
})
export class AdminCompanyEmployeeModule {}
