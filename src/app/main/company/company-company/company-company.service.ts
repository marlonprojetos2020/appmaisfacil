import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../admin/companies/model/user';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CompanyCompanyService {
    constructor(private httpClient: HttpClient) {}

    getUserCompany(): Observable<User> {
        return this.httpClient.get<User>(`${environment.apiUrl}/profile`);
    }
}
