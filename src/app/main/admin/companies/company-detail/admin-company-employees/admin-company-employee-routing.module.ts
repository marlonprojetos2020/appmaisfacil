import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AdminCompanyEmployeeComponent} from './admin-company-employee/admin-company-employee.component';
import {AuthInterceptor} from '../../../../../core/auth/auth.interceptor';
import {AdminCompanyNewEmployeeComponent} from './admin-company-new-employee/admin-company-new-employee/admin-company-new-employee.component';

const routes: Routes = [
    {
        path: '',
        component: AdminCompanyEmployeeComponent,
    },
    {
        path: 'cadastro',
        component: AdminCompanyNewEmployeeComponent,
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
export class AdminCompanyEmployeeRoutingModule {
}
