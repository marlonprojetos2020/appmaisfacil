import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {PoModalPasswordRecoveryModule, PoPageBlockedUserModule, PoPageChangePasswordModule, PoPageLoginModule} from '@po-ui/ng-templates';
import {LoginPageComponent} from './login-page/login-page.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {AccountBlockedComponent} from './account-blocked/account-blocked.component';
import { RegisterSellerComponent } from './register-seller/register-seller.component';
import {PoButtonModule, PoFieldModule, PoPageModule} from "@po-ui/ng-components";
import {LoadingBarModule} from "../../shared/component/loading-bar/loading-bar.module";
import {ReactiveFormsModule} from "@angular/forms";
import {FormModule} from "../../shared/component/form/form.module";

@NgModule({
    declarations: [
        LoginPageComponent,
        ResetPasswordComponent,
        AccountBlockedComponent,
        RegisterSellerComponent,
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        PoPageLoginModule,
        PoModalPasswordRecoveryModule,
        PoPageChangePasswordModule,
        PoPageBlockedUserModule,
        PoPageModule,
        LoadingBarModule,
        PoFieldModule,
        PoButtonModule,
        ReactiveFormsModule,
        FormModule,
    ],
})
export class AuthModule {
}
