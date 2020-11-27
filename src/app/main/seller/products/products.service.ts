import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(
      private http: HttpClient,
  ) { }

  find(page: number = 1, title= ''): Observable<any> {
      return this.http.get(`${environment.apiUrl}/products/p/search?title=${title}&enabled=true&sort=id,desc`);
  }
}
