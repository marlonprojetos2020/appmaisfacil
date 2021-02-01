import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInvoicesNewClientComponent } from './company-invoices-new-client/company-invoices-new-client.component';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';
import { InvalidFeedbackModule } from '../../../../../shared/components/invalid-feedback/invalid-feedback.module';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        PoFieldModule,
        PoButtonModule,
        ReactiveFormsModule,
        InvalidFeedbackModule,
    ],
    declarations: [CompanyInvoicesNewClientComponent],
})
export class CompanyInvoicesNewClientModule {}
