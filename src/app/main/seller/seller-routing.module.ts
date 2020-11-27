import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SellerLayoutComponent} from './seller-layout/seller-layout.component';

const routes: Routes = [
    {
        path: '',
        component: SellerLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'products',
            },
            {
                path: 'produtos',
                loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
            },
            {
                path: 'perfil',
                loadChildren: () => import('./profile-seller/profile-seller.module').then(m => m.ProfileSellerModule),
            },
            {
                path: 'extrato',
                loadChildren: () => import('./seller-balance/seller-balance.module').then(m => m.SellerBalanceModule),
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
export class SellerRoutingModule {
}
