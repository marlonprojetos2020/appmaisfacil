import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PageDatatableService {

    constructor(
        private http: HttpClient,
    ) {
    }

    load(serviceApi: string, params: any): Observable<any> {
        return this.http.get(serviceApi, {params});
    }
}
