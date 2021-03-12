import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoModalModule,
    PoPageModule,
    PoStepperModule,
    PoTableModule,
} from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';

import { CompanyNewInvoiceComponent } from './company-new-invoice/company-new-invoice.component';
import { PageDatatableModule } from '../../../../shared/components/page-datatable/page-datatable.module';
import { CompanyInvoicesNewClientModule } from './company-invoice-client/company-invoices-new-client/company-invoices-new-client.module';
import { CompanyNewInvoiceRoutingModule } from './company-new-invoice-routing.module';
import { InvalidFeedbackModule } from '../../../../shared/components/invalid-feedback/invalid-feedback.module';
import { CompanyInvoiceEditClientModule } from './company-invoice-client/company-invoice-edit-client/company-invoice-edit-client.module';
import { CpfCnpjPipe } from 'src/app/shared/pipe/cpfcnpj-pipe/cpfcnpj.pipe';

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
        ReactiveFormsModule,
        PoTableModule,
        PoModalModule,
        PoStepperModule,
        InvalidFeedbackModule,
        CompanyInvoiceEditClientModule,
    ],
    declarations: [CompanyNewInvoiceComponent],
    providers: [CpfCnpjPipe],
})
export class CompanyNewInvoiceModule {}
