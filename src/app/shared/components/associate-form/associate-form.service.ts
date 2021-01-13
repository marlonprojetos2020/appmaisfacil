import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Associate } from './models/associate';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AssociateFormService {
    constructor(private httpClient: HttpClient) {}

    createAssociate(associate: Associate, id: string): Observable<Associate> {
        return this.httpClient.post<Associate>(
            `${environment.apiUrl}/users/${id}/company-partners`,
            associate);
    }
}
