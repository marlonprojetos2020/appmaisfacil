import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'acessar',
    },
    {
        path: 'acessar',
        loadChildren: () => import('./main/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: 'admin',
        loadChildren: () => import('./main/admin/admin.module').then(m => m.AdminModule),
    },
    {
        path: 'cliente',
        loadChildren: () => import('./main/client/client.module').then(m => m.ClientModule),
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule { }
