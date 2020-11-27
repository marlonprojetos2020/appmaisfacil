import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BankAccountComponent} from './bank-account/bank-account.component';
import {BanksResolver} from '../../user-bank-account/banks-resolver';
import {ProfileStoreResolver} from '../profile-store/profile-store-resolver';

const routes: Routes = [
    {
        path: '',
        component: BankAccountComponent,
        resolve: {
            user: ProfileStoreResolver,
            banks: BanksResolver,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BankAccountRoutingModule {
}
