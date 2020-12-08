import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
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

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule {}
