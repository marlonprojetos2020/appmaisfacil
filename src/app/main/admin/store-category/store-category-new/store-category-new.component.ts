import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb} from '@po-ui/ng-components';
import {StoreCategoryService} from '../store-category.service';
import {StoreCategory} from '../store-category';

@Component({
    selector: 'app-store-category-new',
    templateUrl: './store-category-new.component.html',
    styleUrls: ['./store-category-new.component.scss'],
})
export class StoreCategoryNewComponent implements OnInit {

    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/admin'},
            {label: 'Categorias', link: '/admin/lojas/categorias'},
            {label: 'Novo'},
        ],
    };

    constructor(
        public storeCategoryService: StoreCategoryService,
    ) {
    }

    ngOnInit(): void {
    }

    save(item: StoreCategory): string {
        return `/admin/lojas/categorias/${item.id}`;
    }
}
