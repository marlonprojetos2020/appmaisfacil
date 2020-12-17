import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInterceptor } from 'src/app/core/auth/auth.interceptor';
import { AdminBankStatementListComponent } from './admin-bank-statement-list/admin-bank-statement-list/admin-bank-statement-list.component';

const routes: Routes = [
    {
        path: '',
        component: AdminBankStatementListComponent,
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
export class AdminBankStatementsRoutingModule {}
