import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInvoicesNewClientComponent } from './company-invoices-new-client/company-invoices-new-client.component';
import { PoContainerModule, PoPageModule } from '@po-ui/ng-components';
import { ClientFormModule } from '../../../../../../shared/components/client-form/client-form.module';

@NgModule({
    imports: [CommonModule, PoPageModule, PoContainerModule, ClientFormModule],
    declarations: [CompanyInvoicesNewClientComponent],
})
export class CompanyInvoicesNewClientModule {}
