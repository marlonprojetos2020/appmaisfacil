import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCompanyBankStatementComponent } from './admin-company-bank-statement/admin-company-bank-statement.component';
import { PageDatatableModule } from '../../../../../shared/components/page-datatable/page-datatable.module';
import { PoButtonModule, PoModalModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [AdminCompanyBankStatementComponent],
    imports: [
        CommonModule,
        PageDatatableModule,
        PoModalModule,
        PoButtonModule,
    ],
})
export class AdminCompanyBankStatementModule {}
