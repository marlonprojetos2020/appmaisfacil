import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOrderRoutingModule } from './product-order-routing.module';
import { ProductOrderListComponent } from './product-order-list/product-order-list.component';
import { PageDatatableModule } from '../../../shared/component/page-datatable/page-datatable.module';
import { PoTabsModule, PoButtonModule, PoModalModule, PoFieldModule, PoNotificationModule } from '@po-ui/ng-components';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';
import { CardProductOrderComponent } from './component/card-product-order/card-product-order.component';

@NgModule({
    declarations: [
        ProductOrderListComponent,
        CardProductOrderComponent,
    ],
    imports: [
        CommonModule,
        ProductOrderRoutingModule,
        PageDatatableModule,
        PoButtonModule,
        PoTabsModule,
        PoPageDynamicSearchModule,
        PoModalModule,
        PoFieldModule,
        PoNotificationModule,
    ],
    exports: [CardProductOrderComponent]
})
export class ProductOrderModule {
}
