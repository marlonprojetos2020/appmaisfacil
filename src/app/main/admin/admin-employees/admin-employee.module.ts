import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEmployeeListComponent } from './admin-employee/admin-employee.component';
import { EmployeeListModule } from '../shared/employee-list/employee-list.module';


@NgModule({
    declarations: [AdminEmployeeListComponent],
    imports: [
        CommonModule,
        EmployeeListModule,
    ],
    exports: [AdminEmployeeListComponent],
})
export class AdminEmployeeModule {}
