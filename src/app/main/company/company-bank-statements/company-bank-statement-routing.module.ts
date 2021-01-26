import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../../core/auth/auth.interceptor';
import { CompanyBankStatementComponent } from './company-bank-statement/company-bank-statement.component';
import { CompanyNewBankStatementComponent } from './company-new-bank-statement/company-new-bank-statement/company-new-bank-statement.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyBankStatementComponent,
    },
    {
        path: 'novo-extrato',
        component: CompanyNewBankStatementComponent,
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
export class CompanyBankStatementRoutingModule {}
