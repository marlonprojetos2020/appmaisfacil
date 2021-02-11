import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInvoiceListComponent } from './admin-invoice-list/admin-invoice-list.component';
import { PageDatatableModule } from '../../../../shared/components/page-datatable/page-datatable.module';
import {
    PoButtonModule,
    PoFieldModule,
    PoModalModule,
    PoTableModule,
} from '@po-ui/ng-components';

@NgModule({
    imports: [
        CommonModule,
        PageDatatableModule,
        PoModalModule,
        PoTableModule,
        PoFieldModule,
        PoButtonModule,
    ],
    declarations: [AdminInvoiceListComponent],
    exports: [AdminInvoiceListComponent],
})
export class AdminInvoiceListModule {}
