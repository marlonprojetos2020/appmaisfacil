import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AdminBankStatementsService {
    constructor(private httpClient: HttpClient) {}

    getCompanyFromStatement(id: number): any {
        return this.httpClient.get(`${environment.apiUrl}/users/${id}`);
    }
}
