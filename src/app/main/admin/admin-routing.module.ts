import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';
import { AdminToolbarComponent } from './admin-layout/admin-toolbar/admin-toolbar.component';
import { AdminMenuComponent } from './admin-layout/admin-menu/admin-menu.component';
import { CompanyDetailMenuComponent } from './admin-layout/company-detail-menu/company-detail-menu.component';
import { AdminMyAccountComponent } from './admin-my-account/admin-my-account/admin-my-account.component';
import { AuthInterceptor } from 'src/app/core/auth/auth.interceptor';
import { AdminChargeListComponent } from './admin-charges/admin-charge-list/admin-charge-list.component';
import { AdminBankStatementListComponent } from './admin-bank-statements/admin-bank-statement-list/admin-bank-statement-list.component';
import { AdminInvoiceListComponent } from './admin-invoices/admin-invoice-list/admin-invoice-list.component';
import { AdminEmployeeListComponent } from './admin-employees/admin-employee/admin-employee.component';


const routes: Routes = [
    {
        path: '',
        component: AdminToolbarComponent,
        children: [
            {
                path: '',
                component: AdminMenuComponent,
                children: [
                    {
                        path: '',
                        component: AdminDashboardComponent,
                    },
                    {
                        path: 'minha-conta',
                        component: AdminMyAccountComponent,
                    },
                    {
                        path: 'empresas',
                        loadChildren: () =>
                            import('./companies/admin-company.module').then(
                                (m) => m.AdminCompanyModule
                            ),
                    },
                    {
                        path: 'nota-fiscal',
                        pathMatch: 'full',
                        component: AdminInvoiceListComponent,
                    },
                    {
                        path: 'nota-fiscal/:filter',
                        pathMatch: 'full',
                        component: AdminInvoiceListComponent,
                    },
                    {
                        path: 'extratos',
                        pathMatch: 'full',
                        component: AdminBankStatementListComponent,
                    },
                    {
                        path: 'extratos/:filter',
                        pathMatch: 'full',
                        component: AdminBankStatementListComponent,
                    },
                    {
                        path: 'cobrancas',
                        pathMatch: 'full',
                        component: AdminChargeListComponent,
                    },
                    {
                        path: 'cobrancas/:filter',
                        component: AdminChargeListComponent,
                    },
                    {
                        path: 'funcionarios',
                        pathMatch: 'full',
                        component: AdminEmployeeListComponent,
                    },
                    {
                        path: 'funcionarios/:filter',
                        component: AdminEmployeeListComponent,
                    },
                ],
            },
            {
                path: 'empresa/:id',
                component: CompanyDetailMenuComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                './companies/company-detail/company-detail.module'
                            ).then((m) => m.CompanyDatailModule),
                        // resolve: { company: CompanyDetailResolver },
                    },
                ],
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
export class AdminRoutingModule {}
