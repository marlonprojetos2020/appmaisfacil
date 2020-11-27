import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bank} from '../admin/users/bank-account/bank';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class BankService {

    constructor(
        private http: HttpClient,
    ) {
    }

    list(): Observable<Bank[]> {
        return this.http.get<Bank[]>(`${environment.apiUrl}/profile/bank-account/banks`);
    }
}
