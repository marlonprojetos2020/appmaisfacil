import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import {
    PoButtonModule,
    PoDividerModule,
    PoFieldModule,
    PoInfoModule,
    PoLoadingModule,
    PoPageModule,
    PoSlideModule,
    PoTabsModule,
} from '@po-ui/ng-components';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageDatatableModule } from '../../../shared/component/page-datatable/page-datatable.module';
import { ProductAdModule } from '../../../shared/component/product/product-ad.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PipeModule } from '../../../shared/pipe/pipe.module';
import { FormModule } from '../../../shared/component/form/form.module';
import { ProductPhotosComponent } from './product-photos/product-photos.component';
import { ProductPhotosGalleryComponent } from './product-photos/product-photos-gallery/product-photos-gallery.component';
import { ProductPhotosPageComponent } from './product-photos/product-photos-page/product-photos-page.component';
import { ProductListTableComponent } from './product-list-table/product-list-table.component';
import { AlertModule } from '../../../shared/component/alert/alert.module';
import { CardStoreProductModule} from './component/card-store-product.module';

@NgModule({
    declarations: [
        ProductEditComponent,
        ProductFormComponent,
        ProductNewComponent,
        ProductListComponent,
        ProductDetailComponent,
        ProductPhotosComponent,
        ProductPhotosGalleryComponent,
        ProductPhotosPageComponent,
        ProductListTableComponent,
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        PoPageModule,
        PoLoadingModule,
        PoFieldModule,
        ReactiveFormsModule,
        PageDatatableModule,
        ProductAdModule,
        PoInfoModule,
        PipeModule,
        PoDividerModule,
        FormModule,
        PoButtonModule,
        PoSlideModule,
        AlertModule,
        FormsModule,
        CardStoreProductModule,
        PoTabsModule,
        PoPageDynamicSearchModule,
    ],
})
export class ProductModule {
}
