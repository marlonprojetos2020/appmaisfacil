import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../../core/auth/auth.interceptor';
import { CompanyEmployeeComponent } from './company-employee/company-employee.component';
import { CompanyNewEmployeeComponent } from './company-new-employee/company-new-employee/company-new-employee.component';
import { CompanyEditEmployeeComponent } from './company-edit-employee/company-edit-employee/company-edit-employee.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyEmployeeComponent,
    },
    {
        path: 'cadastro',
        component: CompanyNewEmployeeComponent,
    },
    {
        path: 'editar-funcionario/:id',
        component: CompanyEditEmployeeComponent,
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
export class CompanyEmployeeRoutingModule {}
