import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RolesResolver} from '../users/resolvers/roles-resolver';
import {StoreCategoriesResolver} from '../users/resolvers/store-categories-resolver';
import {UserResolver} from '../users/resolvers/user-resolver';
import {SellerListComponent} from './seller-list/seller-list.component';
import {SellerNewComponent} from './seller-new/seller-new.component';
import {SellerEditComponent} from './seller-edit/seller-edit.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../../../core/auth/auth.interceptor';
import {SellerDetailComponent} from './seller-detail/seller-detail.component';

const routes: Routes = [
    {
        path: '',
        component: SellerListComponent,
    },
    {
        path: 'novo',
        component: SellerNewComponent,
        resolve: {
            roles: RolesResolver,
            storeCategories: StoreCategoriesResolver,
        },
    },
    {
        path: ':id/editar',
        component: SellerEditComponent,
        resolve: {
            roles: RolesResolver,
            storeCategories: StoreCategoriesResolver,
            user: UserResolver,
        },
    },
    {
        path: ':id',
        component: SellerDetailComponent,
        resolve: {
            user: UserResolver,
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
export class SellerRoutingModule {
}
