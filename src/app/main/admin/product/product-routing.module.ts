import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AuthInterceptor} from '../../../core/auth/auth.interceptor';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductResolver} from './product-resolver';

const routes: Routes = [
    {
        path: '',
        component: ProductListComponent,
    },
    {
        path: ':id',
        component: ProductDetailComponent,
        resolve: {
            product: ProductResolver,
        },
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
})

export class ProductRoutingModule {}