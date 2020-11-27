import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { PageDatatableModule } from '../../../shared/component/page-datatable/page-datatable.module';
import { ProductAdModule } from '../../../shared/component/product/product-ad.module';
import { 
    PoPageModule,
    PoDividerModule,
} from '@po-ui/ng-components';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        PageDatatableModule,
        PoPageModule,
        PoDividerModule,
        ProductAdModule,
    ],
})

export class ProductModule {}
