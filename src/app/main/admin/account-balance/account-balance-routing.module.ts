import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountBalanceComponent} from './account-balance/account-balance.component';
import {AccountBalanceResolver} from './account-balance-resolver';

const routes: Routes = [
    {
        path: '',
        component: AccountBalanceComponent,
        resolve: {
            accountBalance: AccountBalanceResolver,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountBalanceRoutingModule {
}
