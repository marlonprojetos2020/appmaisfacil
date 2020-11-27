import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductOrderListComponent} from './product-order-list/product-order-list.component';

const routes: Routes = [
    {
        path: '',
        component: ProductOrderListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductOrderRoutingModule {
}
