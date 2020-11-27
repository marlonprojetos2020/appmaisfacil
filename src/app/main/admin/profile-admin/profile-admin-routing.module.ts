import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../../../core/auth/auth.interceptor';
import {ProfileEditComponent} from './profile-edit/profile-edit.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
    },
    {
        path: 'editar',
        component: ProfileEditComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
})
export class ProfileAdminRoutingModule {
}
