import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDatatableModule } from '../../../shared/component/page-datatable/page-datatable.module';
import { ProductOrderRoutingModule} from './product-order-routing.module';
import { ProductOrderListComponent } from './product-order-list/product-order-list.component';

@NgModule({
    declarations: [ProductOrderListComponent],
    imports: [
        CommonModule,
        ProductOrderRoutingModule,
        PageDatatableModule,
    ],
})
export class ProductOrderModule {
}
