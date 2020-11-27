import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {AccountBlockedComponent} from './account-blocked/account-blocked.component';
import {RegisterSellerComponent} from './register-seller/register-seller.component';

const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent,
    },
    {
        path: 'resetar-senha',
        component: ResetPasswordComponent,
    },
    {
        path: 'conta-bloqueada',
        component: AccountBlockedComponent,
    },
    {
        path: 'cadastrar-se',
        component: RegisterSellerComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {
}
