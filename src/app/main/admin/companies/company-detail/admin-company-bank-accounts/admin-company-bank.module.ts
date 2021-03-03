import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminCompanyBankRoutingModule } from './admin-company-bank-routing.module';
import { AdminCompanyBankAccountComponent } from './admin-company-bank-accounts/admin-company-bank-account.component';
import { AdminCompanyNewBankAccountModule } from './admin-company-new-bank/admin-company-new-bank-account.module';
import { PageDatatableModule } from '../../../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    declarations: [AdminCompanyBankAccountComponent],
    imports: [
        CommonModule,
        AdminCompanyBankRoutingModule,
        AdminCompanyNewBankAccountModule,
        PageDatatableModule,
    ],
})

export class AdminCompanyBankModule {}
