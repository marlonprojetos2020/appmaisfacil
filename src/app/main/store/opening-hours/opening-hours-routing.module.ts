import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../../../core/auth/auth.interceptor';
import {OpeningHoursComponent} from './opening-hours/opening-hours.component';
import {OpeningHoursResolver} from './opening-hours-resolver';

const routes: Routes = [
    {
        path: '',
        component: OpeningHoursComponent,
        resolve: {
            user: OpeningHoursResolver,
        },
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
export class OpeningHoursRoutingModule {
}
