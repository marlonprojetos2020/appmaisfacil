import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AddressApiResponse } from './model/address-api-response';

@Injectable()
export class CompanyNewService {

    constructor(private httpClient: HttpClient) {}

    getAddressFromZipcode(zipcode: string): Observable<AddressApiResponse> {
        if (zipcode) {
            zipcode = zipcode.replace('-', '');
            return this.httpClient.get<AddressApiResponse>(`https://viacep.com.br/ws/${zipcode}/json/`);
        }

        return of(null);
    }
}
