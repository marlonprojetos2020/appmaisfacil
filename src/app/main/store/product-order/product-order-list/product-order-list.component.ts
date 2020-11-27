import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { Router } from '@angular/router';
import { ProductOrderService } from '../product-order.service';
import { ProductOrder } from '../model/product-order';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-product-order-list',
    templateUrl: './product-order-list.component.html',
    styleUrls: ['./product-order-list.component.scss'],
})
export class ProductOrderListComponent implements OnInit {

    showMoreDisabled = false;
    currentFilters: any = {};
    isLoadingBtn = false;
    currentPage = 1;
    items: ProductOrder[] = null;
    state = 'paid';
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Dashboard', link: '/store' },
            { label: 'Produtos' },
        ],
    };

    // {label: 'Visualizar', action: item => this.router.navigateByUrl(`/loja/pedidos/${item.id}`)},

    constructor(
        private router: Router,
        private productOrderService: ProductOrderService) {
    }

    ngOnInit(): void {
        this.loadItems();
    }

    private updateData(): void {
        this.isLoadingBtn = true;
        this.productOrderService.listOrders(this.currentPage, this.currentFilters.search, this.state)
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

    switchTab(type: string): void {
        this.state = type;
        this.loadItems();
    }

    removeItem(orderId): void {
        this.items = this.items.filter(item => {
            return item.id !== orderId;
        });
    }

}
