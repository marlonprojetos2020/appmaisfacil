import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileAdminRoutingModule} from './profile-admin-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {
    PoAvatarModule,
    PoButtonModule, PoDividerModule,
    PoFieldModule,
    PoInfoModule,
    PoLoadingModule,
    PoModalModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormModule} from '../../../shared/component/form/form.module';
import {AvatarEditModule} from '../../../shared/component/avatar-edit/avatar-edit.module';

@NgModule({
    declarations: [ProfileComponent, ProfileEditComponent],
    imports: [
        CommonModule,
        ProfileAdminRoutingModule,
        PoPageModule,
        PoInfoModule,
        PoLoadingModule,
        PoFieldModule,
        ReactiveFormsModule,
        PoDividerModule,
        FormModule,
        AvatarEditModule,
    ],
    exports: [
        ProfileComponent
    ]
})
export class ProfileAdminModule {
}
