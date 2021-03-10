import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyLayoutComponent } from './company-layout/company-layout.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { CompanyChargeListComponent } from './company-charges/company-charge-list/company-charge-list.component';
import { CompanyMyAccountComponent } from './company-my-account/company-my-account/company-my-account.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../core/auth/auth.interceptor';
import { CompanyCompanyComponent } from './company-company/company-company/company-company.component';
import { CompanyAssociateComponent } from './company-associates/company-associate/company-associate.component';
import { CompanyExtraServiceComponent } from './company-extra-services/company-extra-service/company-extra-service.component';
import { CompanyIndicationComponent } from './company-indications/company-indication/company-indication.component';
import { CompanyFaqComponent } from './company-faq/company-faq/company-faq.component';
import { CompanyBankAccountComponent } from './company-bank-accounts/company-bank-account/company-bank-account.component';

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
                component: CompanyChargeListComponent,
            },
            {
                path: 'minha-conta',
                component: CompanyMyAccountComponent,
            },
            {
                path: 'despesas',
                loadChildren: () =>
                    import('./company-expenses/company-expense.module').then(
                        (m) => m.CompanyExpenseModule
                    ),
            },
            {
                path: 'nota-fiscal',
                loadChildren: () =>
                    import('./company-invoices/company-invoice.module').then(
                        (m) => m.CompanyInvoiceModule
                    ),
            },
            {
                path: 'minha-empresa',
                component: CompanyCompanyComponent,
            },
            {
                path: 'contas-bancarias',
                component: CompanyBankAccountComponent,
            },
            {
                path: 'extrato',
                loadChildren: () =>
                    import(
                        './company-bank-statements/company-bank-statement.module'
                    ).then((m) => m.CompanyBankStatementModule),
            },
            {
                path: 'socios',
                component: CompanyAssociateComponent,
            },
            {
                path: 'funcionarios',
                loadChildren: () =>
                    import('./company-employees/company-employee.module').then(
                        (m) => m.CompanyEmployeeModule
                    ),
            },

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
