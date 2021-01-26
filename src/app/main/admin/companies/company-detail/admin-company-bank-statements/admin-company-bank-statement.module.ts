import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCompanyBankStatementComponent } from './admin-company-bank-statement/admin-company-bank-statement.component';
import { PageDatatableModule } from '../../../../../shared/components/page-datatable/page-datatable.module';
import { AdminCompanyNewBankModule } from './admin-company-new-bank/admin-company-new-bank.module';
import { AdminCompanyBankStatementRoutingModule } from './admin-company-bank-statement-routing.module';
import { AdminCompanyBankService } from './admin-company-bank-statement.service';

@NgModule({
    declarations: [AdminCompanyBankStatementComponent],
    imports: [
        CommonModule,
        AdminCompanyBankStatementRoutingModule,
        PageDatatableModule,
        AdminCompanyNewBankModule,
    ],
    providers: [AdminCompanyBankService],
})
export class AdminCompanyBankStatementModule {}
