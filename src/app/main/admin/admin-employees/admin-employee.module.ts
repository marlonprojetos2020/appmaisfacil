import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminEmployeeFiredModule } from './admin-employee-fired/admin-employee-fired.module';
import { AdminEmployeeRoutingModule } from './admin-employee-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PageDatatableModule,
        AdminEmployeeFiredModule,
        AdminEmployeeRoutingModule,
    ],
    declarations: [AdminEmployeeComponent],
})
export class AdminEmployeeModule {}
