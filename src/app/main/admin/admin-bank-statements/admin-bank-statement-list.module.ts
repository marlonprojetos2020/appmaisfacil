import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBankStatementListComponent } from './admin-bank-statement-list/admin-bank-statement-list.component';
import { BankStatementListModule } from '../shared/bank-statement-list/bank-statement-list.module'


@NgModule({
    declarations: [AdminBankStatementListComponent],
    imports: [
        CommonModule,
        BankStatementListModule
    ],
    exports: [AdminBankStatementListComponent],
})
export class AdminBankStatementListModule {}
