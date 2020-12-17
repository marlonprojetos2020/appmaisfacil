import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../../../core/auth/auth.interceptor';
import {AdminInvoiceListComponent} from './admin-invoice-list/admin-invoice-list/admin-invoice-list.component';

const routes: Routes = [
    {
        path: '',
        component: AdminInvoiceListComponent,
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
export class AdminInvoicesRoutingModule{}
