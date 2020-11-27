import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products/products.component';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductAdModule} from '../../../shared/component/product/product-ad.module';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';
import { PoButtonModule, PoModalModule, PoNotificationModule, PoFieldModule  } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms'; 


@NgModule({
    declarations: [ProductsComponent],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        ProductAdModule,
        PoPageDynamicSearchModule,
        PoModalModule,
        PoButtonModule,
        PoNotificationModule,
        PoFieldModule,
        FormsModule,
    ],
})
export class ProductsModule {
}
