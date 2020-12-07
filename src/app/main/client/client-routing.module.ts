import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ChargeListComponent } from './charges/charge-list/charge-list.component';

const routes: Routes = [
    {
        path: '',
        component: ClientLayoutComponent,
        children: [
            {
                path: '',
                component: ClientDashboardComponent,
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
export class ClientRoutingModule {}
