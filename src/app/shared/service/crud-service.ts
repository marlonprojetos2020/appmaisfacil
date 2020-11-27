import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

export abstract class CrudService<T, ID> {

    protected constructor(
        protected http: HttpClient,
    ) {
    }

    abstract getRelativeUrl(): string;

    getBaseUrl(): string {
        return `${environment.apiUrl}/${this.getRelativeUrl()}`;
    }

    list(): Observable<T[]> {
        return this.http.get<T[]>(`${this.getBaseUrl()}`);
    }

    find(id: ID): Observable<T> {
        return this.http.get<T>(`${this.getBaseUrl()}/${id}`);
    }

    save(usuario: T): Observable<T> {
        return this.http.post<T>(this.getBaseUrl(), usuario);
    }

    update(usuario: T, id: ID): Observable<T> {
        return this.http.put<T>(`${this.getBaseUrl()}/${id}`, usuario);
    }
}
