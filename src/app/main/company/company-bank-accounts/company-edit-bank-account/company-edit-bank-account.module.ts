import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageModule } from '@po-ui/ng-components';

import { BankAccountFormModule } from '../shared/bank-account-form/bank-account-form.module';
import { CompanyEditBankAccountComponent } from './company-edit-bank-account/company-edit-bank-account.component';

@NgModule({
    declarations: [CompanyEditBankAccountComponent],
    imports: [
        CommonModule,
        PoPageModule,
        BankAccountFormModule,
    ],
})
export class CompanyEditBankAccountModule {}
