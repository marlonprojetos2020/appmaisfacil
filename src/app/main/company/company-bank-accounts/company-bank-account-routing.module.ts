import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInterceptor } from 'src/app/core/auth/auth.interceptor';
import { CompanyBankAccountComponent } from './company-bank-account/company-bank-account.component'
import { CompanyNewBankAccountComponent } from './company-new-bank-account/company-new-bank-account/company-new-bank-account.component';
import { CompanyEditBankAccountComponent } from './company-edit-bank-account/company-edit-bank-account/company-edit-bank-account.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyBankAccountComponent,
    },
    {
        path: 'nova-conta',
        component: CompanyNewBankAccountComponent,
    },
    {
        path: 'editar-conta/:bankAccountId',
        component: CompanyEditBankAccountComponent,
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
export class CompanyBankAccountRoutingModule {}
