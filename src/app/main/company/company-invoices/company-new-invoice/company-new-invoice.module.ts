import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { CompanyNewInvoiceComponent } from './company-new-invoice/company-new-invoice.component';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        PoFieldModule,
        PoButtonModule,
    ],
    declarations: [CompanyNewInvoiceComponent],
})
export class CompanyNewInvoiceModule {}
