import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreNewComponent} from './store-new/store-new.component';
import {RolesResolver} from '../users/resolvers/roles-resolver';
import {StoreCategoriesResolver} from '../users/resolvers/store-categories-resolver';
import {UserResolver} from '../users/resolvers/user-resolver';
import {StoreListComponent} from './store-list/store-list.component';
import {StoreEditComponent} from './store-edit/store-edit.component';
import {StoreDetailComponent} from './store-detail/store-detail.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../../../core/auth/auth.interceptor';

const routes: Routes = [
    {
        path: '',
        component: StoreListComponent,
    },
    {
        path: 'novo',
        component: StoreNewComponent,
        resolve: {
            roles: RolesResolver,
            storeCategories: StoreCategoriesResolver,
        },
    },
    {
        path: ':id/editar',
        component: StoreEditComponent,
        resolve: {
            roles: RolesResolver,
            storeCategories: StoreCategoriesResolver,
            user: UserResolver,
        },
    },
    {
        path: ':id',
        component: StoreDetailComponent,
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
export class StoreRoutingModule {
}
