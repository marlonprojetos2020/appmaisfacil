import {Injectable} from '@angular/core';
import {CrudService} from '../../../shared/service/crud-service';
import {StoreCategory} from './store-category';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class StoreCategoryService extends CrudService<StoreCategory, number> {

    constructor(
        protected http: HttpClient,
    ) {
        super(http);
    }

    getRelativeUrl(): string {
        return `store/categories`;
    }
}
