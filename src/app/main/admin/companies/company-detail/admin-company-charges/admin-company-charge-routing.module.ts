import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../../../../core/auth/auth.interceptor';
import { AdminCompanyChargeComponent } from './admin-company-charge/admin-company-charge.component';
import { AdminCompanyNewChargeComponent } from './admin-company-new-charge/admin-company-new-charge/admin-company-new-charge.component';
import { AdminCompanyEditChargeComponent } from './admin-company-edit-charge/admin-company-edit-charge/admin-company-edit-charge.component';

const routes: Routes = [
    {
        path: '',
        component: AdminCompanyChargeComponent,
    },
    {
        path: 'nova-cobranca',
        component: AdminCompanyNewChargeComponent,
    },
    {
        path: 'editar/:id',
        component: AdminCompanyEditChargeComponent,
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
export class AdminCompanyChargeRoutingModule {}
