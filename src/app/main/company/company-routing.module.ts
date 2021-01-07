import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyLayoutComponent } from './company-layout/company-layout.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { ChargeListComponent } from './charges/charge-list/charge-list.component';
import { CompanyMyAccountComponent } from './company-my-account/company-my-account/company-my-account.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../core/auth/auth.interceptor';
import { CompanyExpenseComponent } from './company-expenses/company-expense/company-expense.component';
import { CompanyAccountingComponent } from './company-accounting/company-accounting/company-accounting.component';
import { CompanyCompanyComponent } from './company-company/company-company/company-company.component';
import { CompanyBankStatementComponent } from './company-bank-statements/company-bank-statement/company-bank-statement.component';
import { CompanyAssociateComponent } from './company-associates/company-associate/company-associate.component';
import { CompanyExtraServiceComponent } from './company-extra-services/company-extra-service/company-extra-service.component';
import { CompanyIndicationComponent } from './company-indications/company-indication/company-indication.component';
import { CompanyFaqComponent } from './company-faq/company-faq/company-faq.component';
import { CompanyInvoiceComponent } from './company-invoices/company-invoice/company-invoice.component';
import { CompanyEmployeeComponent } from './company-employees/company-employee/company-employee.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyLayoutComponent,
        children: [
            {
                path: '',
                component: CompanyDashboardComponent,
            },
            {
                path: 'cobrancas',
                component: ChargeListComponent,
            },
            {
                path: 'minha-conta',
                component: CompanyMyAccountComponent,
            },
            {
                path: 'despesas',
                component: CompanyExpenseComponent,
            },
            {
                path: 'contabilidade',
                component: CompanyAccountingComponent,
            },
            {
                path: 'nota-fiscal',
                component: CompanyInvoiceComponent,
            },
            {
                path: 'minha-empresa',
                component: CompanyCompanyComponent,
            },
            {
                path: 'extrato',
                component: CompanyBankStatementComponent,
            },
            {
                path: 'socios',
                component: CompanyAssociateComponent,
            },
            {
                path: 'funcionarios',
                component: CompanyEmployeeComponent,
            },
            // {
            //     path: 'sessao-expirada',
            //     loadChildren: () => import('./main/session-expired/session-expired.module').then(m => m.SessionExpiredModule),
            // },
            {
                path: 'servicos',
                component: CompanyExtraServiceComponent,
            },
            {
                path: 'indicacoes',
                component: CompanyIndicationComponent,
            },
            {
                path: 'faq',
                component: CompanyFaqComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
})
export class CompanyRoutingModule {}
