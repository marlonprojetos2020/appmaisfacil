import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardStoreProductComponent } from './card-store-product/card-store-product.component';
import { PoWidgetModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';





@NgModule({
    declarations: [CardStoreProductComponent],
    exports: [
        CardStoreProductComponent,
    ],
    imports: [
        CommonModule,
        PoWidgetModule,
        RouterModule,
    ],
})
export class CardStoreProductModule { }
