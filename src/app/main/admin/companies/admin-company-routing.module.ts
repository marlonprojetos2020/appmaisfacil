import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list/company-list.component';
import { CompanyNewComponent } from './company-new/company-new/company-new.component';
import { AuthInterceptor } from '../../../core/auth/auth.interceptor';


const routes: Routes = [
    {
        path: '',
        component: CompanyListComponent,
    },
    {
        path: 'nova-empresa',
        component: CompanyNewComponent,
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
export class AdminCompanyRoutingModule {}
