import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInvoiceListComponent } from './admin-invoice-list/admin-invoice-list.component';
import { InvoiceListModule } from 'src/app/main/admin/shared/invoice-list/invoice-list.module';

@NgModule({
    declarations: [AdminInvoiceListComponent],
    imports: [
        CommonModule,
        InvoiceListModule,
    ],
    exports: [AdminInvoiceListComponent],
})
export class AdminInvoiceListModule {}
