import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCompanyInvoiceComponent } from './admin-company-invoice/admin-company-invoice.component';
import { InvoiceListModule } from '../../../shared/invoice-list/invoice-list.module';

@NgModule({
    declarations: [AdminCompanyInvoiceComponent],
    imports: [
        CommonModule,
        InvoiceListModule],
})
export class AdminCompanyInvoiceModule {}
