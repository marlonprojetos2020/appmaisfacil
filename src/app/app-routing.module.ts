import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './main/auth/auth.guard';
import {AdminGuard} from './main/admin/admin.guard';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './core/auth/auth.interceptor';
import {AuthenticatedGuard} from './core/auth/authenticated.guard';
import {LoadingBarInterceptor} from './shared/component/loading-bar/loading-bar.interceptor';
import {StoreGuard} from './main/store/store.guard';
import {SellerGuard} from './main/seller/seller.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'acessar',
    },
    {
        path: 'acessar',
        loadChildren: () => import('./main/auth/auth.module').then(m => m.AuthModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'alterar-senha',
        loadChildren: () => import('./main/change-password/change-password.module').then(m => m.ChangePasswordModule),
        canActivate: [AuthenticatedGuard],
    },
    {
        path: 'admin',
        loadChildren: () => import('./main/admin/admin.module').then(m => m.AdminModule),
        canActivate: [AdminGuard],
    },
    {
        path: 'loja',
        loadChildren: () => import('./main/store/store.module').then(m => m.StoreModule),
        canActivate: [StoreGuard],
    },
    {
        path: 'vendedor',
        loadChildren: () => import('./main/seller/seller.module').then(m => m.SellerModule),
        canActivate: [SellerGuard],
    },
    {
        path: 'sessao-expirada',
        loadChildren: () => import('./main/session-expired/session-expired.module').then(m => m.SessionExpiredModule),
    },
    {
        path: '**',
        redirectTo: '/acessar',
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
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingBarInterceptor,
            multi: true,
        },
    ],
})
export class AppRoutingModule {
}
