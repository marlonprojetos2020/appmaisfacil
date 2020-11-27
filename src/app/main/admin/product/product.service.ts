import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../../../environments/environment';


@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor( private httpClient: HttpClient ){}

    getProduct(productId: number): Observable<any>{
        return this.httpClient.get<any>(`${environment.apiUrl}/products/admin/${productId}`);
    }
}
