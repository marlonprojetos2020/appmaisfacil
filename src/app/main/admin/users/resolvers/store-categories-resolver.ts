import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {StoreCategory} from '../../store-category/store-category';
import {StoreCategoryService} from '../../store-category/store-category.service';

@Injectable({
    providedIn: 'root',
})
export class StoreCategoriesResolver implements Resolve<StoreCategory[]> {
    constructor(private storeCategoryService: StoreCategoryService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<any> | Promise<any> | any {
        return this.storeCategoryService.list();
    }
}
