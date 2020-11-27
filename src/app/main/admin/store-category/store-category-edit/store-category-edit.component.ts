import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb} from '@po-ui/ng-components';
import {StoreCategoryService} from '../store-category.service';
import {ActivatedRoute} from '@angular/router';
import {StoreCategory} from '../store-category';

@Component({
    selector: 'app-store-category-edit',
    templateUrl: './store-category-edit.component.html',
    styleUrls: ['./store-category-edit.component.scss'],
})
export class StoreCategoryEditComponent implements OnInit {

    breadcrumb: PoBreadcrumb;

    storeCategory: StoreCategory;

    detailPage: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        public storeCategoryService: StoreCategoryService,
    ) {
    }

    ngOnInit(): void {
        this.storeCategory = this.activatedRoute.snapshot.data.storeCategory;

        this.breadcrumb = {
            items: [
                {label: 'Dashboard', link: '/admin'},
                {label: 'Categorias', link: '/admin/lojas/categorias'},
                {label: this.storeCategory.name, link: '/admin/lojas/categorias'},
                {label: 'Editar'},
            ],
        };

        this.detailPage = `/admin/lojas/categorias/${this.storeCategory.id}`;
    }

}
