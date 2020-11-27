import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {UserWithdrawPage} from './user-withdraw-page';
import {UserWithdraw} from './user-withdraw';

@Injectable({
    providedIn: 'root',
})
export class UserWithdrawService {

    constructor(
        private http: HttpClient,
    ) {
    }

    find(
        description: string,
        reason: string,
        page = '1',
        size = '10',
        sort: string[] = ['consolidated,asc', 'id,desc'],
    ): Observable<UserWithdrawPage> {
        const params = {page, size, description, reason, sort};
        return this.http.get<UserWithdrawPage>(`${environment.apiUrl}/user-transaction/admin/p/search`, {params});
    }

    consolidate(id: number): Observable<UserWithdraw> {
        return this.http.post<UserWithdraw>(`${environment.apiUrl}/user-transaction/admin/${id}/consolidate`, {});
    }

    refund(id: number, reason: string): Observable<UserWithdraw> {
        return this.http.post<UserWithdraw>(`${environment.apiUrl}/user-transaction/admin/${id}/refund`, {reason});
    }
}
