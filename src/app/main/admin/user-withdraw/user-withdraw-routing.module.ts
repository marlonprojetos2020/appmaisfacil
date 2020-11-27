import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserWithdrawListComponent} from './user-withdraw-list/user-withdraw-list.component';
import {UserWithdrawResolver} from './user-withdraw-resolver';

const routes: Routes = [
    {
        path: '',
        component: UserWithdrawListComponent,
        resolve: {
            userWithdrawPage: UserWithdrawResolver,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserWithdrawRoutingModule {
}
