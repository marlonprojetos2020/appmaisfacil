import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreCategoryListComponent} from './store-category-list/store-category-list.component';
import {StoreCategoryFormComponent} from './store-category-form/store-category-form.component';
import {StoreCategoryRoutingModule} from './store-category-routing.module';
import {PageDatatableModule} from '../../../shared/component/page-datatable/page-datatable.module';
import {PoFieldModule, PoLoadingModule, PoPageModule} from '@po-ui/ng-components';
import {ReactiveFormsModule} from '@angular/forms';
import { StoreCategoryNewComponent } from './store-category-new/store-category-new.component';
import { StoreCategoryEditComponent } from './store-category-edit/store-category-edit.component';


@NgModule({
    declarations: [
        StoreCategoryListComponent,
        StoreCategoryFormComponent,
        StoreCategoryNewComponent,
        StoreCategoryEditComponent,
    ],
    imports: [
        CommonModule,
        StoreCategoryRoutingModule,
        PageDatatableModule,
        PoPageModule,
        PoLoadingModule,
        ReactiveFormsModule,
        PoFieldModule,
    ],
})
export class StoreCategoryModule {
}
