import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageModule } from '@po-ui/ng-components';

import { AdminCompanyNewBankAccountComponent } from './admin-company-new-bank-account/admin-company-new-bank-account.component';
import { AdminBankAccountFormModule } from '../shared/admin-bank-account-form/admin-bank-account-form.module';

@NgModule({
    declarations: [
        AdminCompanyNewBankAccountComponent,
    ],
    imports: [
        CommonModule,
        PoPageModule,
        AdminBankAccountFormModule,
    ],
    exports: [
        AdminCompanyNewBankAccountComponent,
    ],
})
export class AdminCompanyNewBankAccountModule {}
