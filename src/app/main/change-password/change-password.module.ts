import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PoPageChangePasswordModule, PoPageDynamicDetailModule } from '@po-ui/ng-templates';
import { ChangePasswordRoutingModule } from './change-password-routing.module';

@NgModule({
    declarations: [ChangePasswordComponent],
    imports: [
        CommonModule,
        ChangePasswordRoutingModule,
        PoPageChangePasswordModule,
        PoPageDynamicDetailModule,
    ],
})
export class ChangePasswordModule {
}
