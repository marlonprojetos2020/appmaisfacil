import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyBankStatementComponent } from './company-bank-statement/company-bank-statement.component';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';
import { PoFieldModule, PoModalModule } from '@po-ui/ng-components';

@NgModule({
    imports: [CommonModule, PageDatatableModule, PoModalModule, PoFieldModule],
    declarations: [CompanyBankStatementComponent],
})
export class CompanyBankStatementModule {}
