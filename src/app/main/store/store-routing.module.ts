import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreLayoutComponent} from './store-layout/store-layout.component';
import {DashboardPageStoreComponent} from './dashboard-page-store/dashboard-page-store.component';

const routes: Routes = [
    {
        path: '',
        component: StoreLayoutComponent,
        children: [
            {
                path: '',
                component: DashboardPageStoreComponent,
            },
            {
                path: 'horarios-de-funcionamento',
                loadChildren: () => import('./opening-hours/opening-hours.module').then(m => m.OpeningHoursModule),
            },
            {
                path: 'perfil',
                loadChildren: () => import('./profile-store/profile-store.module').then(m => m.ProfileStoreModule),
            },
            {
                path: 'produtos',
                loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
            },
            {
                path: 'pedidos',
                loadChildren: () => import('./product-order/product-order.module').then(m => m.ProductOrderModule),
            },
            {
                path: 'extrato',
                loadChildren: () => import('./store-balance/store-balance.module').then(m => m.StoreBalanceModule),
            },
            {
                path: 'conta-bancaria',
                loadChildren: () => import('./bank-account/bank-account.module').then(m => m.BankAccountModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StoreRoutingModule {
}
