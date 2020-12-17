import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AbstractControl } from '@angular/forms';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { User } from 'src/app/main/admin/companies/model/user';


@Injectable()
export class MyAccountFormService {

    constructor(private httpClient: HttpClient) {}

    existEmail(email: string): Observable<boolean> {
        return this.httpClient.get<boolean>(`${environment.apiUrl}/users/exists/email?email=${email}`);
    }

    isEmailTaken(initialValue?: string): (control: AbstractControl) => Observable<{ isEmailTaken: boolean }> {
        return (control: AbstractControl) =>
            of(control.value)
                .pipe(debounceTime(300))
                .pipe(switchMap(email => email === initialValue ? of(null) : this.existEmail(email)))
                .pipe(map(isTaken => isTaken ? { isEmailTaken: true } : null));
    }

    getMyAccount(): Observable<User> {
        return this.httpClient.get<User>(`${environment.apiUrl}/profile`);
    }

    editUser(name: string, email: string): Observable<User> {
        return this.httpClient.post<User>(`${environment.apiUrl}/profile`, { name, email });
    }
}
