import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../../core/auth/auth.interceptor';
import { CompanyExpenseComponent } from './company-expense/company-expense.component';
import { CompanyNewExpenseComponent } from './company-new-expense/company-new-expense/company-new-expense.component';
import { CompanyEditExpenseComponent } from './company-edit-expense/company-edit-expense/company-edit-expense.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyExpenseComponent,
    },
    {
        path: 'nova-despesa',
        component: CompanyNewExpenseComponent,
    },
    {
        path: 'editar-despesa/:id',
        pathMatch: 'full',
        component: CompanyEditExpenseComponent,
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
export class CompanyExpensesRoutingModule {}
