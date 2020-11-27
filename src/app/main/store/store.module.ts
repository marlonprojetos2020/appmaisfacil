import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreRoutingModule} from './store-routing.module';
import {StoreLayoutComponent} from './store-layout/store-layout.component';
import {LoadingBarModule} from '../../shared/component/loading-bar/loading-bar.module';
import {PoMenuModule, PoToolbarModule, PoPageModule} from '@po-ui/ng-components';
import { DashboardPageStoreComponent } from './dashboard-page-store/dashboard-page-store.component';
import { ProductOrderModule } from './product-order/product-order.module';

@NgModule({
    declarations: [
        StoreLayoutComponent,
        DashboardPageStoreComponent,
    ],
    imports: [
        CommonModule,
        StoreRoutingModule,
        LoadingBarModule,
        PoToolbarModule,
        PoPageModule,
        PoMenuModule,
        ProductOrderModule,
    ],
})
export class StoreModule {
}
