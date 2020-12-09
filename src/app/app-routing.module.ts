import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { LoginGuard } from './core/auth/login.guard';
import { AdminGuard } from './main/admin/admin.guard';
import { CompanyGuard } from './main/company/company.guard';

const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'acessar',
    },
    {
        path: 'acessar',
        loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule),
        canActivate: [LoginGuard],
    },
    {
        path: 'admin',
        loadChildren: () => import('./main/admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthGuard, AdminGuard],
    },
    {
        path: 'empresa',
        loadChildren: () => import('./main/company/company.module').then(m => m.CompanyModule),
        canActivate: [AuthGuard, CompanyGuard],
    },
    {
        path: 'sessao-expirada',
        loadChildren: () => import('./main/session-expired/session-expired.module').then(m => m.SessionExpiredModule),
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ]

})
export class AppRoutingModule {}
