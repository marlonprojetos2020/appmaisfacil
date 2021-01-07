import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCompanyInvoiceComponent } from './admin-company-invoice/admin-company-invoice.component';
import { PageDatatableModule } from '../../../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    imports: [CommonModule, PageDatatableModule],
    declarations: [AdminCompanyInvoiceComponent],
})
export class AdminCompanyInvoiceModule{}
