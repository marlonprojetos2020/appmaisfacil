import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyBankStatementComponent} from './company-bank-statement/company-bank-statement.component';
import {PageDatatableModule} from '../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    imports: [CommonModule,  PageDatatableModule],
    declarations: [CompanyBankStatementComponent],
})
export class CompanyBankStatementModule {
}
