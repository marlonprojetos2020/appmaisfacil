import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {AdminInvoiceListComponent} from './admin-invoice-list/admin-invoice-list.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [AdminInvoiceListComponent],
    exports: [AdminInvoiceListComponent],
})
export class AdminInvoiceListModule {}
