import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyLayoutComponent } from './company-layout/company-layout.component';
import { PoMenuModule, PoToolbarModule } from '@po-ui/ng-components';
import { CompanyDashboardModule } from './company-dashboard/company-dashboard.module';
import { NeedHelpComponent } from './company-layout/need-help/need-help.component';
import { CompanyChargesModule } from './company-charges/company-charges.module';
import { CompanyMyAccountMoudle } from './company-my-account/company-my-account.module';
import { CompanyExpenseModule } from './company-expenses/company-expense.module';
import { CompanyInvoiceModule } from './company-invoices/company-invoice.module';
import { CompanyCompanyModule } from './company-company/company-company.module';
import { CompanyBankStatementModule } from './company-bank-statements/company-bank-statement.module';
import { CompanyAssociateModule } from './company-associates/company-associate.module';
import { CompanyEmployeeModule } from './company-employees/company-employee.module';
import { CompanyExtraServiceModule } from './company-extra-services/company-extra-service.module';
import { CompanyIndicationModule } from './company-indications/company-indication.module';
import { CompanyFaqModule } from './company-faq/company-faq.module';
import { CompanyBankAccountModule } from './company-bank-accounts/company-bank-account.module';
import { CompanyMyPlanModule } from './company-my-plan/company-my-plan.module';

@NgModule({
    declarations: [CompanyLayoutComponent, NeedHelpComponent],
    imports: [
        CommonModule,
        CompanyRoutingModule,
        PoToolbarModule,
        PoMenuModule,
        CompanyDashboardModule,
        CompanyChargesModule,
        CompanyMyAccountMoudle,
        CompanyExpenseModule,
        CompanyInvoiceModule,
        CompanyCompanyModule,
        CompanyBankAccountModule,
        CompanyBankStatementModule,
        CompanyAssociateModule,
        CompanyEmployeeModule,
        CompanyExtraServiceModule,
        CompanyIndicationModule,
        CompanyFaqModule,
        CompanyMyPlanModule,
    ],
    exports: [],
    providers: [],
})
export class CompanyModule {}
