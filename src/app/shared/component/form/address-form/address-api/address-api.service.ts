import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AddressApiResponse} from './address-api-response';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AddressApiService {

    constructor(
        private http: HttpClient,
    ) {
    }

    getAddressFromZipcode(zipcode: string): Observable<AddressApiResponse> {
        if (zipcode) {
            zipcode = zipcode.replace('-', '');
            return this.http.get<AddressApiResponse>(`https://viacep.com.br/ws/${zipcode}/json/`);
        }

        return of(null);
    }
}
