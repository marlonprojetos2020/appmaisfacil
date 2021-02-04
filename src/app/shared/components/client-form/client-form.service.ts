import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './models/client';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ClientFormService {
    constructor(private httpClient: HttpClient) {}

    createClient(client: Client): Observable<Client> {
        return this.httpClient.post<Client>(
            `${environment.apiUrl}/company/client`,
            client
        );
    }

    editClient(client: Client, id: number): Observable<Client> {
        return this.httpClient.put<Client>(
            `${environment.apiUrl}/company/client/${id}`,
            client
        );
    }
}
