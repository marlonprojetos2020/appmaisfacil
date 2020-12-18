import {NgModule} from '@angular/core';
import {PoPageModule} from '@po-ui/ng-components';
import {CommonModule} from '@angular/common';
import {CompanyInvoiceComponent} from './company-invoice/company-invoice.component';

@NgModule({
    imports: [PoPageModule, CommonModule],
    declarations: [CompanyInvoiceComponent],
})
export class CompanyInvoiceModule {}
