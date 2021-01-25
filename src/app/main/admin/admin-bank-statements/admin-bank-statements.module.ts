import { NgModule } from '@angular/core';
import { AdminBankStatementListModule } from './admin-bank-statement-list/admin-bank-statement-list.module';
import { AdminBankStatementsRoutingModule } from './admin-bank-statements-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        AdminBankStatementsRoutingModule,
        AdminBankStatementListModule,
        CommonModule,
    ],
})
export class AdminBankStatementsModule {}
