import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './model/user';

@Injectable({
    providedIn: 'root',
})
export class CompanyDetailService {

    private userId$ = new BehaviorSubject<number>(100);

    constructor(private httpClient: HttpClient) {
    }

    getUserCompany(id: number): Observable<User> {
        this.notifyUserId(213);
        return this.httpClient.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    getUserId(): Observable<number> {
        return this.userId$.asObservable();
    }

    notifyUserId(id: number): void {
        this.userId$.next(id);
        console.log(this.userId$.value);
    }

}
