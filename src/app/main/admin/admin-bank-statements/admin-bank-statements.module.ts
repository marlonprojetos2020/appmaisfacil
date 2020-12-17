import { NgModule } from '@angular/core';
import { AdminBankStatementListModule } from './admin-bank-statement-list/admin-bank-statement-list.module';
import { AdminBankStatementsRoutingModule } from './admin-bank-statements-routing.module';
import { AdminBankStatementsService } from './admin-bank-statements.service';

@NgModule({
    imports: [
        AdminBankStatementsRoutingModule,
        AdminBankStatementListModule,
    ],
    providers: [AdminBankStatementsService],
})
export class AdminBankStatementsModule {}
