import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SellerLayoutComponent } from './seller-layout/seller-layout.component';
import {LoadingBarModule} from '../../shared/component/loading-bar/loading-bar.module';
import {PoMenuModule, PoToolbarModule} from '@po-ui/ng-components';
import {RouterModule} from '@angular/router';
import {SellerRoutingModule} from './seller-routing.module';

@NgModule({
    declarations: [SellerLayoutComponent],
    imports: [
        CommonModule,
        SellerRoutingModule,
        LoadingBarModule,
        PoToolbarModule,
        PoMenuModule,
        RouterModule,
    ],
})
export class SellerModule {
}
