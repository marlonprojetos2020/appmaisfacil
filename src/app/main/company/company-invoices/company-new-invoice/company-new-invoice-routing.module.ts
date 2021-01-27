import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../../../core/auth/auth.interceptor';
import { CompanyNewInvoiceComponent } from './company-new-invoice/company-new-invoice.component';
import { CompanyInvoicesNewClientComponent } from './company-invoices-new-client/company-invoices-new-client/company-invoices-new-client.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyNewInvoiceComponent,
    },
    {
        path: 'novo-cliente',
        component: CompanyInvoicesNewClientComponent,
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
export class CompanyNewInvoiceRoutingModule {}
