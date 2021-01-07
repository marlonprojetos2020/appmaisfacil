import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../../core/auth/auth.interceptor';
import { CompanyInvoiceIssueNoteComponent } from './company-invoices-issue-note/company-invoice-issue-note/company-invoice-issue-note.component';
import { CompanyInvoiceComponent } from './company-invoice/company-invoice.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyInvoiceComponent,
    },
    {
        path: 'emitir-nota',
        component: CompanyInvoiceIssueNoteComponent,
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
export class CompanyInvoicesRoutingModule {}
