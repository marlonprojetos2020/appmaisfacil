import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { PoPageLoginModule } from '@po-ui/ng-templates';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        PoPageLoginModule,
    ],
})
export class AuthModule { }
