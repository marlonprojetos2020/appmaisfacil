import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AddressApiResponse } from './model/address-api-response';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../../company-detail/model/user';

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

    existEmail(email: string): Observable<boolean> {
        return this.httpClient.get<boolean>(`${environment.apiUrl}/users/exists/email?email=${email}`);
    }

    isEmailTaken(): object {
        return (control: AbstractControl) =>
            control.valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(email => this.existEmail(email)))
                .pipe(map(data => data ? { isEmailTaken: true } : null))
                .pipe(first());
    }

    createUser(user: User): Observable<User> {
        return this.httpClient.post<User>(`${environment.apiUrl}/users`, user);
    }
}


