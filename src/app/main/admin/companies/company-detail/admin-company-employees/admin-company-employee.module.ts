import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCompanyEmployeeComponent } from './admin-company-employee/admin-company-employee.component';
import { PageDatatableModule } from '../../../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    imports: [CommonModule, PageDatatableModule],
    declarations: [AdminCompanyEmployeeComponent],
})
export class AdminCompanyEmployeeModule {}
