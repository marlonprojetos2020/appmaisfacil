import { RouterModule, Routes } from '@angular/router';
import { CompanyInvoiceComponent } from './company-invoice/company-invoice.component';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../../core/auth/auth.interceptor';

const routes: Routes = [
    {
        path: '',
        component: CompanyInvoiceComponent,
    },
    {
        path: 'emitir-nota',
        loadChildren: () =>
            import('./company-new-invoice/company-new-invoice.module').then(
                (m) => m.CompanyNewInvoiceModule
            ),
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
export class CompanyInvoiceRoutingModule {}
