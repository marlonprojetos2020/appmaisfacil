import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {AdminCompanyBankStatementComponent} from './admin-company-bank-statement/admin-company-bank-statement.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [AdminCompanyBankStatementComponent],
})
export class AdminCompanyBankStatementModule {
}
