import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AdminCompanyEditAssociateService {
    constructor(private httpClient: HttpClient) {}

    getAssociate(idCompany: string, idAssociate: string): Observable<any> {
        return this.httpClient.get<any>(`${environment.apiUrl}/users/${idCompany}/company-partners/${idCompany}`);
    }
}
