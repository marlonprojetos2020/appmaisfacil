import { Injectable } from '@angular/core';
import { CrudService } from '../../../shared/service/crud-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../../environments/environment';
import { ProductOrder } from './model/product-order';
import { ProductOrderList } from './model/product-order-list';
import { Product } from '../product/model/product';


@Injectable({
    providedIn: 'root',
})
export class ProductOrderService extends CrudService<ProductOrder, number> {

    constructor(
        protected http: HttpClient,
    ) {
        super(http);
    }

    getRelativeUrl(): string {
        return `product-order/store`;
    }

    finishOrder(productId: number): Observable<any> {
        return this.http.post<Product>(`${environment.apiUrl}/product-order/store/${productId}/consolidate`, null);
    }

    // unFinishOrder??

    listOrders(page: number = 1, titleOrVoucher: string = '', state: string = ''): Observable<ProductOrderList> {
        return this.http.get<ProductOrderList>(
            `${environment.apiUrl}/product-order/store/p/search`,
            {params: {page: page.toString(), titleOrVoucher, state}},
        );
    }

}
