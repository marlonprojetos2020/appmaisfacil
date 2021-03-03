import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminBankAccountFormModule } from '../shared/admin-bank-account-form/admin-bank-account-form.module';
import { PoPageModule } from '@po-ui/ng-components';
import { AdminCompanyEditBankAccountComponent } from './admin-company-edit-bank-account/admin-company-edit-bank-account.component';

@NgModule({
    declarations: [AdminCompanyEditBankAccountComponent],
    imports: [
        CommonModule,
        PoPageModule,
        AdminBankAccountFormModule,
    ],
})
export class AdminCompanyEditBankAccountModule {}
