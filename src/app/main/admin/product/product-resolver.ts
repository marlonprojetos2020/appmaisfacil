import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {ProductService} from './product.service';


@Injectable({
    providedIn: 'root',
})
export class ProductResolver implements Resolve<any> {

    constructor(
        private productService: ProductService,
        private router: Router,
        ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<any> | Promise<any> | any {
        return this.productService.getProduct(parseInt(route.paramMap.get('id'), 0))
        .pipe(catchError(() => this.router.navigateByUrl('/')));
    }
}
