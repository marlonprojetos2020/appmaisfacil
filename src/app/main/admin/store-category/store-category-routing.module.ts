import {NgModule} from '@angular/core';
import {StoreCategoryListComponent} from './store-category-list/store-category-list.component';
import {RouterModule, Routes} from '@angular/router';
import {StoreCategoryNewComponent} from './store-category-new/store-category-new.component';
import {StoreCategoryEditComponent} from './store-category-edit/store-category-edit.component';
import {StoreCategoryResolver} from './store-category-resolver';

const routes: Routes = [
    {
        path: '',
        component: StoreCategoryListComponent,
    },
    {
        path: 'novo',
        component: StoreCategoryNewComponent,
    },
    {
        path: ':id/editar',
        component: StoreCategoryEditComponent,
        resolve: {
            storeCategory: StoreCategoryResolver,
        },
    },
    {
        path: ':id',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StoreCategoryRoutingModule {
}
