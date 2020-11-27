import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OpeningHours} from './opening-hours';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class OpeningHoursService {

    constructor(
        private http: HttpClient,
    ) {
    }

    update(openingHours: OpeningHours): Observable<any> {
        return this.http.post(`${environment.apiUrl}/profile/opening-hours`, openingHours);
    }
}
