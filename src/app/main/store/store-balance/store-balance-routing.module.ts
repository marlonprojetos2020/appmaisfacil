import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreBalanceComponent} from './store-balance/store-balance.component';
import {UserBalanceResolver} from '../../user-balance/user-balance-resolver';
import {StoreWithdrawComponent} from './store-withdraw/store-withdraw.component';
import {ProfileStoreResolver} from '../profile-store/profile-store-resolver';

const routes: Routes = [
    {
        path: '',
        component: StoreBalanceComponent,
        resolve: {
            userBalance: UserBalanceResolver,
        },
    },
    {
        path: 'sacar',
        component: StoreWithdrawComponent,
        resolve: {
            userBalance: UserBalanceResolver,
            user: ProfileStoreResolver,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StoreBalanceRoutingModule {
}
