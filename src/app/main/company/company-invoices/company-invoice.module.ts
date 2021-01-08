import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInvoiceComponent } from './company-invoice/company-invoice.component';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';
import { CompanyInvoiceRoutingModule } from './company-invoice-routing.module';
import { CompanyNewInvoiceModule } from './company-new-invoice/company-new-invoice.module';

@NgModule({
    imports: [
        CommonModule,
        PageDatatableModule,
        CompanyInvoiceRoutingModule,
        CompanyNewInvoiceModule,
    ],
    declarations: [CompanyInvoiceComponent],
})
export class CompanyInvoiceModule {}
