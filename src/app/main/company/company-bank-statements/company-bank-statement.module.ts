import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {CompanyBankStatementComponent} from './company-bank-statement/company-bank-statement.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [CompanyBankStatementComponent],
})
export class CompanyBankStatementModule {
}
