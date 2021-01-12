import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInterceptor } from 'src/app/core/auth/auth.interceptor';
import { CompanyEditComponent } from '../company-edit/company-edit/company-edit.component';
import { CompanyDetailDashboardComponent } from './dashboard/dashboard/company-detail-dashboard.component';
import { AdminCompanyBankStatementComponent } from './admin-company-bank-statements/admin-company-bank-statement/admin-company-bank-statement.component';
import { AdminCompanyAccountingComponent } from './admin-company-accounting/admin-company-accounting/admin-company-accounting.component';
import { AdminCompanyInvoiceComponent } from './admin-company-invoices/admin-company-invoice/admin-company-invoice.component';
import { AdminCompanyCompanyComponent } from './admin-company-companies/admin-company-company/admin-company-company.component';
import { AdminCompanyExtraServiceComponent } from './admin-company-extra-services/admin-company-extra-service/admin-company-extra-service.component';
import { AdminCompanyIndicationComponent } from './admin-company-indications/admin-company-indication/admin-company-indication.component';
import { AdminCompanyFaqComponent } from './admin-company-faq/admin-company-faq/admin-company-faq.component';
import { AdminCompanyEmployeeComponent } from './admin-company-employees/admin-company-employee/admin-company-employee.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyDetailDashboardComponent,
    },
    {
        path: 'editar',
        component: CompanyEditComponent,
    },
    {
        path: 'cobrancas',
        loadChildren: () =>
            import('./admin-company-charges/admin-company-charge.module')
                .then((m) => m.AdminCompanyChargeModule),
    },
    {
        path: 'pedidos',
        loadChildren: () =>
            import('./admin-company-expenses/admin-company-expense.module')
                .then((m) => m.AdminCompanyExpenseModule),
    },
    {
        path: 'extrato',
        loadChildren: () =>
            import('./admin-company-bank-statements/admin-company-bank-statement.module')
                .then((m) => m.AdminCompanyBankStatementModule),
    },
    {
        path: 'contabilidade',
        component: AdminCompanyAccountingComponent,
    },
    {
        path: 'nota-fiscal',
        component: AdminCompanyInvoiceComponent,
    },
    {
        path: 'empresa',
        component: AdminCompanyCompanyComponent,
    },
    {
        path: 'socios',
        loadChildren: () =>
            import(
                './admin-company-associates/admin-company-associate.module'
            ).then((m) => m.AdminCompanyAssociateModule),
    },
    {
        path: 'funcionarios',
        component: AdminCompanyEmployeeComponent,
    },
    {
        path: 'servicos',
        component: AdminCompanyExtraServiceComponent,
    },
    {
        path: 'indicacoes',
        component: AdminCompanyIndicationComponent,
    },
    {
        path: 'faq',
        component: AdminCompanyFaqComponent,
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
export class CompanyDetailRoutingModule {}
