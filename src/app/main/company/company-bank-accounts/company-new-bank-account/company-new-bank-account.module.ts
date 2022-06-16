import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageModule } from '@po-ui/ng-components';

import { CompanyNewBankAccountComponent } from './company-new-bank-account/company-new-bank-account.component';
import { BankAccountFormModule } from '../shared/bank-account-form/bank-account-form.module';

@NgModule({
    declarations: [
        CompanyNewBankAccountComponent,
    ],
    imports: [
        CommonModule,
        PoPageModule,
        BankAccountFormModule,
    ],
    exports: [
        CompanyNewBankAccountComponent,
    ],
})
export class CompanyNewBankAccountModule {}
