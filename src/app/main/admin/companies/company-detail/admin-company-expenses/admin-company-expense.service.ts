import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { Observable } from 'rxjs';
import { Expense } from './models/expense';
import { User } from '../../model/user';

@Injectable({
    providedIn: 'root',
})
export class AdminCompanyExpenseService {
    constructor(private httpClient: HttpClient) {}

    getExpense(id: number): Observable<Expense> {
        return this.httpClient.get<Expense>(
            `${environment.apiUrl}/company/expense/${id}`
        );
    }

    getCompany(id: number): any {
        return this.httpClient.get(`${environment.apiUrl}/users/${id}`);
    }
}
