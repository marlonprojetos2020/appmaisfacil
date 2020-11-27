import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersListComponent} from './components/users-list/users-list.component';
import {RolesResolver} from './resolvers/roles-resolver';
import {UserResolver} from './resolvers/user-resolver';
import {UsersNewComponent} from './components/users-new/users-new.component';
import {UsersEditComponent} from './components/users-edit/users-edit.component';
import {StoreCategoriesResolver} from './resolvers/store-categories-resolver';
import {UsersDetailPageComponent} from './components/users-detail-page/users-detail-page.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../../../core/auth/auth.interceptor';

const routes: Routes = [
    {
        path: '',
        component: UsersListComponent,
    },
    {
        path: 'novo',
        component: UsersNewComponent,
        resolve: {
            roles: RolesResolver,
            storeCategories: StoreCategoriesResolver,
        },
    },
    {
        path: ':id/editar',
        component: UsersEditComponent,
        resolve: {
            roles: RolesResolver,
            storeCategories: StoreCategoriesResolver,
            user: UserResolver,
        },
    },
    {
        path: ':id',
        component: UsersDetailPageComponent,
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
export class UsersRoutingModule {
}
