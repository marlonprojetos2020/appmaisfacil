import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ProductPhotoService {

    constructor(
        private http: HttpClient,
    ) {
    }

    deleteProductPhoto(productId: number, productPhotoId: number): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/products/store/${productId}/photos/${productPhotoId}`);
    }
}
