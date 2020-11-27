import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SellerBalanceComponent} from './seller-balance/seller-balance.component';
import {UserBalanceResolver} from '../../user-balance/user-balance-resolver';
import {SellerWithdrawComponent} from './seller-withdraw/seller-withdraw.component';
import {ProfileSellerResolver} from '../profile-seller/profile-seller-resolver';

const routes: Routes = [
    {
        path: '',
        component: SellerBalanceComponent,
        resolve: {
            userBalance: UserBalanceResolver,
        },
    },
    {
        path: 'sacar',
        component: SellerWithdrawComponent,
        resolve: {
            userBalance: UserBalanceResolver,
            user: ProfileSellerResolver,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SellerBalanceRoutingModule {
}
