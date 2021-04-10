import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthRoutingModule } from './auth-routing.module';
import { PoModalPasswordRecoveryModule, PoPageChangePasswordModule, PoPageLoginModule } from '@po-ui/ng-templates';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        LoginComponent,
        ResetPasswordComponent,
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        PoPageLoginModule,
        PoPageChangePasswordModule,
        PoModalPasswordRecoveryModule,
        RouterModule,
    ],
})
export class AuthModule {}
