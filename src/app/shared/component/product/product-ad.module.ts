import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdComponent } from './product-ad/product-ad.component';
import { PoSlideModule } from '@po-ui/ng-components';


@NgModule({
    declarations: [ProductAdComponent],
    exports: [
        ProductAdComponent,
    ],
    imports: [
        CommonModule,
        PoSlideModule,
    ],
})
export class ProductAdModule { }
