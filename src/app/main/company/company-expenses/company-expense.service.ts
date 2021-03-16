import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyExpense } from './models/company-expense';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CompanyExpenseService {
    constructor(private httpClient: HttpClient) {}

    createCompanyExpense(companyExpense: CompanyExpense): Observable<CompanyExpense> {
        return this.httpClient.post<CompanyExpense>(`${environment.apiUrl}/company/expense`, companyExpense);
    }

    editCompanyExpense(id: number, companyExpense: CompanyExpense): Observable<CompanyExpense> {
        return this.httpClient.put<CompanyExpense>(`${environment.apiUrl}/company/expense/${id}`, companyExpense);
    }

    getTypeExpense(): any {
        return this.httpClient.get(
            `${environment.apiUrl}/company/expense/types`
        );
    }

    findExpense(id): Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}/company/expense/${id}`);
    }

    getCompanyExpense(): any {
        return this.httpClient.get(`${environment.apiUrl}/profile`);
    }
}
