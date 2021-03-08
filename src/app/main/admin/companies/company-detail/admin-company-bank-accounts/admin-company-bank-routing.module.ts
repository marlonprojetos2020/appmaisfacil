import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInterceptor } from 'src/app/core/auth/auth.interceptor';
import { AdminCompanyBankAccountComponent } from './admin-company-bank-account/admin-company-bank-account/admin-company-bank-account.component'
import { AdminCompanyNewBankAccountComponent } from './admin-company-new-bank-account/admin-company-new-bank-account/admin-company-new-bank-account.component';
import { AdminCompanyEditBankAccountComponent } from './admin-company-edit-bank-account/admin-company-edit-bank-account/admin-company-edit-bank-account.component';

const routes: Routes = [
    {
        path: '',
        component: AdminCompanyBankAccountComponent,
    },
    {
        path: 'nova-conta',
        component: AdminCompanyNewBankAccountComponent,
    },
    {
        path: 'editar-conta/:bankAccountId',
        component: AdminCompanyEditBankAccountComponent,
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
export class AdminCompanyBankRoutingModule {}
