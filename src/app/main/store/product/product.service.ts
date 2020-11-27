import { Injectable } from '@angular/core';
import { CrudService } from '../../../shared/service/crud-service';
import { Product } from './model/product';
import { ProductList } from './model/product-list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../../environments/environment';


@Injectable({
    providedIn: 'root',
})
export class ProductService extends CrudService<Product, number> {

    constructor(
        protected http: HttpClient,
    ) {
        super(http);
    }

    getRelativeUrl(): string {
        return `products/store`;
    }

    updateEnabled(productId: number, enabled: boolean): Observable<Product> {
        return this.http.post<Product>(`${this.getBaseUrl()}/${productId}/enabled`, { enabled });
    }

    listProducts(page: number = 0, title: string = '', enabled: boolean = true): Observable<ProductList> {
        return this.http.get<ProductList>(`${environment.apiUrl}/products/store/p/search?page=${page}&title=${title}&enabled=${enabled}&sort=id,desc`);
    }

}
