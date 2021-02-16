import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyEmployee } from './models/company-employee';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CompanyEmployeeService {
    constructor(private httpClient: HttpClient) {}

    createCompanyEmployee(
        companyEmploy: CompanyEmployee
    ): Observable<CompanyEmployee> {
        return this.httpClient.post<CompanyEmployee>(
            `${environment.apiUrl}/company/employee`,
            companyEmploy
        );
    }

    requestFired(id: number): Observable<any> {
        return this.httpClient.post(
            `${environment.apiUrl}/company/employee/${id}/request-fire`,
            id
        );
    }

    getCompanyEmployee(id: number): any {
        return this.httpClient.get(`${environment.apiUrl}/`);
    }
}
