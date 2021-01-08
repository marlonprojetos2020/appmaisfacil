import { RouterModule, Routes } from '@angular/router';
import { CompanyInvoiceComponent } from './company-invoice/company-invoice.component';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../../core/auth/auth.interceptor';
import { CompanyNewInvoiceComponent } from './company-new-invoice/company-new-invoice/company-new-invoice.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyInvoiceComponent,
    },
    {
        path: 'emitir-nota',
        component: CompanyNewInvoiceComponent,
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
