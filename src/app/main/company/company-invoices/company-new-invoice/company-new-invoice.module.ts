import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { CompanyNewInvoiceComponent } from './company-new-invoice/company-new-invoice.component';
import { PageDatatableModule } from '../../../../shared/components/page-datatable/page-datatable.module';
import { CompanyInvoicesNewClientModule } from './company-invoices-new-client/company-invoices-new-client.module';
import { CompanyNewInvoiceRoutingModule } from './company-new-invoice-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        PoFieldModule,
        PoButtonModule,
        PageDatatableModule,
        CompanyInvoicesNewClientModule,
        CompanyNewInvoiceRoutingModule,
    ],
    declarations: [CompanyNewInvoiceComponent],
})
export class CompanyNewInvoiceModule {}
