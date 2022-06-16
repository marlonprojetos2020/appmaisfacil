import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthInterceptor } from 'src/app/core/auth/auth.interceptor';
import { CompanyEditComponent } from '../company-edit/company-edit/company-edit.component';
import { CompanyDetailDashboardComponent } from './dashboard/dashboard/company-detail-dashboard.component';
import { AdminCompanyInvoiceComponent } from './admin-company-invoices/admin-company-invoice/admin-company-invoice.component';
import { AdminCompanyCompanyComponent } from './admin-company-companies/admin-company-company/admin-company-company.component';
import { AdminCompanyEmployeeComponent } from './admin-company-employees/admin-company-employee/admin-company-employee.component';
import { AdminCompanyBankStatementComponent } from './admin-company-bank-statements/admin-company-bank-statement/admin-company-bank-statement.component';

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
        path: 'contas-bancarias',
        loadChildren: () =>
            import('./admin-company-bank-accounts/admin-company-bank.module')
                .then((m) => m.AdminCompanyBankModule),
    },
    {
        path: 'extrato',
        component: AdminCompanyBankStatementComponent,
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
