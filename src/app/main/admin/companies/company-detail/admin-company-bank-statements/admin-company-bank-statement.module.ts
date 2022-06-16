import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCompanyBankStatementComponent } from './admin-company-bank-statement/admin-company-bank-statement.component';
import { BankStatementListModule } from '../../../shared/bank-statement-list/bank-statement-list.module';

@NgModule({
    declarations: [AdminCompanyBankStatementComponent],
    imports: [
        CommonModule,
        BankStatementListModule,
    ],
    exports: [AdminCompanyBankStatementComponent],
})
export class AdminCompanyBankStatementModule {}
