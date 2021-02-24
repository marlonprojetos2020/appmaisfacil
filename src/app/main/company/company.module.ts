import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyRoutingModule} from './company-routing.module';
import {CompanyLayoutComponent} from './company-layout/company-layout.component';
import {PoMenuModule, PoToolbarModule} from '@po-ui/ng-components';
import {CompanyDashboardModule} from './company-dashboard/company-dashboard.module';
import {NeedHelpComponent} from './company-layout/need-help/need-help.component';
import {ChargesModule} from './charges/charges.module';
import {CompanyMyAccountMoudle} from './company-my-account/company-my-account.module';
import {CompanyExpenseModule} from './company-expenses/company-expense.module';
import {CompanyInvoiceModule} from './company-invoices/company-invoice.module';
import {CompanyCompanyModule} from './company-company/company-company.module';
import {CompanyBankStatementModule} from './company-bank-statements/company-bank-statement.module';
import {CompanyAssociateModule} from './company-associates/company-associate.module';
import {CompanyEmployeeModule} from './company-employees/company-employee.module';
import {CompanyExtraServiceModule} from './company-extra-services/company-extra-service.module';
import {CompanyIndicationModule} from './company-indications/company-indication.module';
import {CompanyFaqModule} from './company-faq/company-faq.module';

@NgModule({
    declarations: [CompanyLayoutComponent, NeedHelpComponent],
    imports: [
        CommonModule,
        CompanyRoutingModule,
        PoToolbarModule,
        PoMenuModule,
        CompanyDashboardModule,
        ChargesModule,
        CompanyMyAccountMoudle,
        CompanyExpenseModule,
        CompanyInvoiceModule,
        CompanyCompanyModule,
        CompanyBankStatementModule,
        CompanyAssociateModule,
        CompanyEmployeeModule,
        CompanyExtraServiceModule,
        CompanyIndicationModule,
        CompanyFaqModule,
    ],
    exports: [],
    providers: [],
})
export class CompanyModule {}
