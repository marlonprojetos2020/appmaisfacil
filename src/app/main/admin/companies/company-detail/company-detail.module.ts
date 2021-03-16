import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailRoutingModule } from './company-detail-routing.module';
import { CompanyDetailDashboardModule } from './dashboard/company-detail-dashboard.module';
import { CompanyEditModule } from '../company-edit/company-edit.module';
import { AdminCompanyChargeModule } from './admin-company-charges/admin-company-charge.module';
import { AdminCompanyExpenseModule } from './admin-company-expenses/admin-company-expense.module';
import { AdminCompanyBankStatementModule } from './admin-company-bank-statements/admin-company-bank-statement.module';
import { AdminCompanyInvoiceModule } from './admin-company-invoices/admin-company-invoice.module';
import { AdminCompanyCompanyModule } from './admin-company-companies/admin-company-company.module';
import { AdminCompanyAssociateModule } from './admin-company-associates/admin-company-associate.module';
import { AdminCompanyEmployeeModule } from './admin-company-employees/admin-company-employee.module';
// import {AdminCompanyExtraServiceModule} from './admin-company-extra-services/admin-company-extra-service.module';
// import {AdminCompanyIndicationModule} from './admin-company-indications/admin-company-indication.module';
// import {AdminCompanyFaqModule} from './admin-company-faq/admin-company-faq.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        CompanyDetailRoutingModule,
        CompanyDetailDashboardModule,
        CompanyEditModule,
        AdminCompanyChargeModule,
        AdminCompanyExpenseModule,
        AdminCompanyBankStatementModule,
        AdminCompanyInvoiceModule,
        AdminCompanyCompanyModule,
        AdminCompanyAssociateModule,
        AdminCompanyEmployeeModule,
        // AdminCompanyExtraServiceModule,
        // AdminCompanyIndicationModule,
        // AdminCompanyFaqModule,
    ],
})
export class CompanyDatailModule {
}
