import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AdminBankStatementsService {
    constructor(private httpClient: HttpClient) {}

    aprovedStatement(id: number): Observable<any> {
        return this.httpClient.post(
            `${environment.apiUrl}/statement/${id}/ok`,
            id
        );
    }
}
