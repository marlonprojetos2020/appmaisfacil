import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {StoreCategory} from './store-category';
import {StoreCategoryService} from './store-category.service';

@Injectable({
    providedIn: 'root',
})
export class StoreCategoryResolver implements Resolve<StoreCategory> {
    constructor(private storeCategoryService: StoreCategoryService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<any> | Promise<any> | any {
        return this.storeCategoryService.find(parseInt(route.paramMap.get('id'), 0));
    }
}
