import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CompanyDetailService {

    constructor(private httpClient: HttpClient) {}

    getCompany(id: number): Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}/users/${id}`)
    }

}