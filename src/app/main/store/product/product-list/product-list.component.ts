import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoPageAction } from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../model/product';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

    showMoreDisabled = false;
    currentFilters: any = {};
    isLoadingBtn = false;
    currentPage = 1;
    items: Product[] = null;
    isActive = true;

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Dashboard', link: '/store' },
            { label: 'Anúncios' },
        ],
    };

    pageActions: PoPageAction[] = [
        {label: 'Novo', url: '/loja/produtos/novo'},
    ];

    constructor(
        private router: Router,
        private productService: ProductService) { }

    ngOnInit(): void {
        this.currentPage = 1;
        this.loadItems();
    }

    private updateData(): void {
        this.isLoadingBtn = true;
        this.productService.listProducts(this.currentPage, this.currentFilters.search, this.isActive)
            .pipe(finalize(() => this.isLoadingBtn = false))
            .subscribe(
                list => {
                    this.showMoreDisabled = !list.hasNext;
                    if (this.items) {
                        this.items.push(...list.items);
                    } else {
                        this.items = list.items;
                    }
                },
            );
    }

    loadItems(): void {
        this.items = null;
        this.currentPage = 1;
        // this.loading = true;
        this.updateData();
    }

    handleQuickSearch(searchValue: string): void {
        searchValue ? this.currentFilters.search = searchValue : delete this.currentFilters.search;
        this.loadItems();
    }

    handleChangeDisclaimers(disclaimers: any[]): void {
        this.currentFilters = {};
        disclaimers.forEach(disclaimer => this.currentFilters[disclaimer.property] = disclaimer.value);
        this.loadItems();
    }

    showMore(): void {
        this.currentPage++;
        this.updateData();
    }

    toggleEnabled(isActive: boolean): void {
        this.isActive = isActive;
        this.loadItems();
    }
}
