import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../../../../core/auth/auth.interceptor';
import { AdminCompanyExpenseComponent } from './admin-company-expense/admin-company-expense.component';

const routes: Routes = [
    {
        path: '',
        component: AdminCompanyExpenseComponent,
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
export class AdminCompanyExpenseRoutingModule {}
