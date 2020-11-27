import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CrudService} from '../../../../shared/service/crud-service';
import {User} from '../user';

@Injectable({
    providedIn: 'root',
})
export class UsersService extends CrudService<User, number> {

    constructor(
        protected http: HttpClient,
    ) {
        super(http);
    }

    getRelativeUrl(): string {
        return 'users';
    }

    toggleEnabled(id: number): Observable<any> {
        return this.http.post(`${this.getBaseUrl()}/${id}/toggle-enabled`, {});
    }

    revokeTokens(id: number): Observable<any> {
        return this.http.post(`${this.getBaseUrl()}/${id}/revoke-token`, {});
    }

    exists(email: string): Observable<boolean> {
        return this.http.get<boolean>(
            `${this.getBaseUrl()}/exists/email`,
            {params: {email}},
        );
    }
}
