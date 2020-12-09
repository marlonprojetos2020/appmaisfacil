import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list/company-list.component';
import { AuthInterceptor } from '../../../core/auth/auth.interceptor';


const routes: Routes = [
    {
        path: '',
        component: CompanyListComponent,
    },
    {
        path: ':id',
        loadChildren: () => import('./company-detail/company-detail.module').then(m => m.CompanyDatailModule),
    }
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
export class AdminCompanyRoutingModule {}
