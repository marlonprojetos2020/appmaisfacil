import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInvoiceEditClientComponent } from './company-invoice-edit-client/company-invoice-edit-client.component';
import { PoContainerModule, PoPageModule } from '@po-ui/ng-components';
import { ClientFormModule } from '../../../../../../shared/components/client-form/client-form.module';

@NgModule({
    imports: [CommonModule, PoPageModule, PoContainerModule, ClientFormModule],
    declarations: [CompanyInvoiceEditClientComponent],
})
export class CompanyInvoiceEditClientModule {}
