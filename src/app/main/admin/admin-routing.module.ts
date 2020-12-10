import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { AdminToolbarComponent } from './admin-layout/admin-toolbar/admin-toolbar.component';
import { AdminMenuComponent } from './admin-layout/admin-menu/admin-menu.component';
import { CompanyDetailMenuComponent } from './admin-layout/company-detail-menu/company-detail-menu.component';

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
                        path: 'empresas',
                        loadChildren: () => import('./companies/admin-company.module').then(m => m.AdminCompanyModule),
                    },
                ],
            },
            {
                path: 'empresa',
                component: CompanyDetailMenuComponent,
                //         children: [
                //         ]
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
