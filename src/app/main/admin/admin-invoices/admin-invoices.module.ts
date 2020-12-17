import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminInvoiceListModule} from './admin-invoice-list/admin-invoice-list.module';
import {AdminInvoicesRoutingModule} from './admin-invoices-routing.module';

@NgModule({
    imports: [CommonModule, AdminInvoiceListModule, AdminInvoicesRoutingModule],
})
export class AdminInvoicesModule {
}
