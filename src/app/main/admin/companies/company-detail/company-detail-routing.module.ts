import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInterceptor } from 'src/app/core/auth/auth.interceptor';
import { CompanyEditComponent } from '../company-edit/company-edit/company-edit.component';
import { CompanyDetailDashboardComponent } from './dashboard/dashboard/company-detail-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyDetailDashboardComponent,
    },
    {
        path: 'editar',
        component: CompanyEditComponent,
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
