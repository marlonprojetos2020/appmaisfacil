import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../../../core/auth/auth.interceptor';
import {ProfileStoreComponent} from './profile-store/profile-store.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileStoreComponent,
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
export class ProfileStoreRoutingModule {
}
