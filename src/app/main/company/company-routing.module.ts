import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyLayoutComponent} from './company-layout/company-layout.component';
import {CompanyDashboardComponent} from './company-dashboard/company-dashboard.component';
import {ChargeListComponent} from './charges/charge-list/charge-list.component';
import {CompanyMyAccountComponent} from './company-my-account/company-my-account/company-my-account.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../../core/auth/auth.interceptor';

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
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    },
    ],
})
export class CompanyRoutingModule {
}
