import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyLayoutComponent } from './company-layout/company-layout.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { ChargeListComponent } from './charges/charge-list/charge-list.component';

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
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CompanyRoutingModule {}
