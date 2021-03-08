import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminCompanyBankRoutingModule } from './admin-company-bank-routing.module';
import { AdminCompanyBankAccountComponent } from './admin-company-bank-account/admin-company-bank-account/admin-company-bank-account.component';
import { AdminCompanyNewBankAccountModule } from './admin-company-new-bank-account/admin-company-new-bank-account.module';
import { AdminCompanyEditBankAccountModule } from './admin-company-edit-bank-account/admin-company-edit-bank-account.module';
import { PageDatatableModule } from '../../../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    declarations: [AdminCompanyBankAccountComponent],
    imports: [
        CommonModule,
        AdminCompanyBankRoutingModule,
        AdminCompanyNewBankAccountModule,
        AdminCompanyEditBankAccountModule,
        PageDatatableModule,
    ],
})

export class AdminCompanyBankModule {}
