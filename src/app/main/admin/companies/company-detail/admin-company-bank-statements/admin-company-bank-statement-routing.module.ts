import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInterceptor } from 'src/app/core/auth/auth.interceptor';
import { AdminCompanyBankStatementComponent } from './admin-company-bank-statement/admin-company-bank-statement.component';
import { AdminCompanyNewBankComponent } from './admin-company-new-bank/admin-company-new-bank/admin-company-new-bank.component';

const routes: Routes = [
    {
        path: '',
        component: AdminCompanyBankStatementComponent,
    },
    {
        path: 'nova-conta',
        component: AdminCompanyNewBankComponent,
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
export class AdminCompanyBankStatementRoutingModule {}
