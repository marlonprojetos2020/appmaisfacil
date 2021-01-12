import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Associate } from '../../model/associate';
import { Observable } from 'rxjs';
import { User } from '../../model/user';
import { environment } from '../../../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AdminCompanyAssociateService {
    constructor(private httpClient: HttpClient) {}

    createAssociate(associate: Associate, id: string): Observable<Associate> {
        return this.httpClient.post<Associate>(
            `${environment.apiUrl}/users/${id}/company-partners`,
            associate
        );
    }

    getUserCompany(id: number): Observable<User> {
        return this.httpClient.get<User>(`${environment.apiUrl}/users/${id}`);
    }
}
