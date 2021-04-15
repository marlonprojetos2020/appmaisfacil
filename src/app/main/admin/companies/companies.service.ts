import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AddressApiResponse } from './model/address-api-response';
import { AbstractControl } from '@angular/forms';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './model/user';

@Injectable({
    providedIn: 'root',
})
export class CompaniesService {
    constructor(private httpClient: HttpClient) {}

    getAddressFromZipcode(zipcode: string): Observable<AddressApiResponse> {
        if (zipcode) {
            zipcode = zipcode.replace('-', '');
            return this.httpClient.get<AddressApiResponse>(
                `https://viacep.com.br/ws/${zipcode}/json/`
            );
        }

        return of(null);
    }

    existEmail(email: string): Observable<boolean> {
        return this.httpClient.get<boolean>(
            `${environment.apiUrl}/users/exists/email?email=${email}`
        );
    }

    isEmailTaken(
        initialValue?: string
    ): (control: AbstractControl) => Observable<{ isEmailTaken: boolean }> {
        return (control: AbstractControl) =>
            of(control.value)
                .pipe(debounceTime(300))
                .pipe(
                    switchMap((email) =>
                        email === initialValue
                            ? of(null)
                            : this.existEmail(email)
                    )
                )
                .pipe(
                    map((isTaken) => (isTaken ? { isEmailTaken: true } : null))
                );
    }

    createUser(user: User): Observable<User> {
        return this.httpClient.post<User>(`${environment.apiUrl}/users`, user);
    }

    editUser(user: User, id: number): Observable<User> {
        return this.httpClient.put<User>(
            `${environment.apiUrl}/users/${id}`,
            user
        );
    }

    deleteUser(id: string): Observable<any> {
        return this.httpClient.delete(`${environment.apiUrl}/users/${id}`);
    }

    getUserCompany(id: number): Observable<User> {
        return this.httpClient.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    getPlanOptions(): Observable<any> {
        return this.httpClient.get<any>(`${environment.apiUrl}/users/company/plans`);
    }

    getUserCompanyBreadcrumb(id: number): Observable<User> {
        return this.httpClient.get<User>(
            `${environment.apiUrl}/users/p/search?search=${id}&searchBy=id&sort=id,desc`
        );
    }
}
