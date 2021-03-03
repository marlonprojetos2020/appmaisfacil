import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCompanyBankStatementComponent } from './admin-company-bank-statement/admin-company-bank-statement.component';
import { PageDatatableModule } from '../../../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    declarations: [AdminCompanyBankStatementComponent],
    imports: [
        CommonModule,
        PageDatatableModule,
    ],
})
export class AdminCompanyBankStatementModule {}
