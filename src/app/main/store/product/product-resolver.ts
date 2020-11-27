import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from './model/product';
import {ProductService} from './product.service';
import {catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class ProductResolver implements Resolve<Product> {

    constructor(
        private productService: ProductService,
        private router: Router,
    ) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<any> | Promise<any> | any {
        return this.productService.find(parseInt(route.paramMap.get('id'), 0))
            .pipe(catchError(() => this.router.navigateByUrl('/')));
    }
}
