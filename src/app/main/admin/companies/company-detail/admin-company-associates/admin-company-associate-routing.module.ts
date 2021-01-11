import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../../../../core/auth/auth.interceptor';
import { AdminCompanyAssociateComponent } from './admin-company-associate/admin-company-associate.component';
import { AdminCompanyNewAssociateComponent } from './admin-company-new-associate/admin-company-new-associate/admin-company-new-associate.component';

const routes: Routes = [
    {
        path: '',
        component: AdminCompanyAssociateComponent,
    },
    {
        path: 'novo-socio',
        component: AdminCompanyNewAssociateComponent,
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
export class AdminCompanyAssociateRoutingModule {}
