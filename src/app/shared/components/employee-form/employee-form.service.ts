import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyEmployee } from '../../../main/company/company-employees/models/company-employee';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class EmployeeFormService {
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
        return this.httpClient.get(
            `${environment.apiUrl}/company/employee/${id}`
        );
    }

    updateEmployee(
        id: number,
        companyEmployee: CompanyEmployee
    ): Observable<CompanyEmployee> {
        return this.httpClient.put<CompanyEmployee>(
            `${environment.apiUrl}/company/employee/${id}`,
            companyEmployee
        );
    }
}
