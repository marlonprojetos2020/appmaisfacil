import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyInvoiceComponent} from './company-invoice/company-invoice.component';
import {PageDatatableModule} from '../../../shared/components/page-datatable/page-datatable.module';
import {CompanyInvoicesRoutingModule} from './company-invoices-routing.module';
import {CompanyInvoiceIssueNoteModule} from './company-invoices-issue-note/company-invoice-issue-note.module';

@NgModule({
    imports: [CommonModule, PageDatatableModule, CompanyInvoicesRoutingModule, CompanyInvoiceIssueNoteModule ],
    declarations: [CompanyInvoiceComponent],
})
export class CompanyInvoiceModule {}
