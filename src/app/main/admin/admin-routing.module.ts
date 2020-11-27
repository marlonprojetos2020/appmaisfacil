import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {DashboardPageAdminComponent} from './dashboard-page-admin/dashboard-page-admin.component';

const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                component: DashboardPageAdminComponent,
            },
            {
                path: 'produtos',
                loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
            },
            {
                path: 'extrato',
                loadChildren: () => import('./account-balance/account-balance.module').then(m => m.AccountBalanceModule),
            },
            {
                path: 'saques',
                loadChildren: () => import('./user-withdraw/user-withdraw.module').then(m => m.UserWithdrawModule),
            },
            {
                path: 'usuarios',
                loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
            },
            {
                path: 'perfil',
                loadChildren: () => import('./profile-admin/profile-admin.module').then(m => m.ProfileAdminModule),
            },
            {
                path: 'lojas/categorias',
                loadChildren: () => import('./store-category/store-category.module').then(m => m.StoreCategoryModule),
            },
            {
                path: 'lojas',
                loadChildren: () => import('./store/store.module').then(m => m.StoreModule),
            },
            {
                path: 'vendedores',
                loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule),
            },
            {
                path: 'pedidos',
                loadChildren: () => import('./product-order/product-order.module').then(m => m.ProductOrderModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {
}
