import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../model/user';

@Injectable({
    providedIn: 'root',
})
export class AdminCompanyCompanyService {
    constructor(private httpClient: HttpClient) {}

    getUser(id: string): Observable<User> {
        return this.httpClient.get<User>(`${environment.apiUrl}/users/${id}`);
    }
}
