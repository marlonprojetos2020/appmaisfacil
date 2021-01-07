import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInvoiceListComponent } from './admin-invoice-list/admin-invoice-list.component';
import { PageDatatableModule } from '../../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    imports: [CommonModule, PageDatatableModule],
    declarations: [AdminInvoiceListComponent],
    exports: [AdminInvoiceListComponent],
})
export class AdminInvoiceListModule {}
