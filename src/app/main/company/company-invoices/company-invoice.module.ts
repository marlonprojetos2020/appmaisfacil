import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInvoiceComponent } from './company-invoice/company-invoice.component';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    imports: [CommonModule, PageDatatableModule],
    declarations: [CompanyInvoiceComponent],
})
export class CompanyInvoiceModule {}
