import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list/product-list.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductNewComponent} from './product-new/product-new.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductResolver} from './product-resolver';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../../../core/auth/auth.interceptor';
import {ProductPhotosPageComponent} from './product-photos/product-photos-page/product-photos-page.component';
import {ProductListTableComponent} from './product-list-table/product-list-table.component';

const routes: Routes = [
    {
        path: '',
        component: ProductListComponent,
    },
    {
        path: 'table',
        component: ProductListTableComponent,
    },
    {
        path: 'novo',
        component: ProductNewComponent,
    },
    {
        path: ':id/editar',
        component: ProductEditComponent,
        resolve: {
            product: ProductResolver,
        },
    },
    {
        path: ':id/fotos',
        component: ProductPhotosPageComponent,
        resolve: {
            product: ProductResolver,
        },
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
export class ProductRoutingModule {
}
