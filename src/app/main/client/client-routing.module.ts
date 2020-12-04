import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: ClientLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./client-dashboard/client-dashboard.module').then(m => m.ClientDashboardModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClientRoutingModule {}
