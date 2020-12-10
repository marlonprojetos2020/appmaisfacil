import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './model/user';

@Injectable()
export class CompanyDetailService {

    constructor(private httpClient: HttpClient) {}

    getUserCompany(id: number): Observable<User> {
        return this.httpClient.get<User>(`${environment.apiUrl}/users/${id}`);
    }

}
