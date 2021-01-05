import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInterceptor } from 'src/app/core/auth/auth.interceptor';
import { AdminEmployeeListComponent } from './admin-employee-list/admin-employee-list/admin-employee-list.component';
import {AdminNewEmplooyeeComponent} from './admin-new-employee/admin-new-employee/admin-new-emplooyee.component';

const routes: Routes = [
    {
        path: '',
        component: AdminEmployeeListComponent,
    },
    {
        path: 'cadastro',
        component: AdminNewEmplooyeeComponent,
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
export class AdminEmployeesRoutingModule {}
