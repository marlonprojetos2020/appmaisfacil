import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {AdminCompanyInvoiceComponent} from './admin-company-invoice/admin-company-invoice.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [AdminCompanyInvoiceComponent],
})
export class AdminCompanyInvoiceModule{}
