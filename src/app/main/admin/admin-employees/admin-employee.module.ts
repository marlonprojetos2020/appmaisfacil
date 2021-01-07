import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';

@NgModule({
    imports: [CommonModule, PageDatatableModule],
    declarations: [AdminEmployeeComponent],
})
export class AdminEmployeeModule {}
