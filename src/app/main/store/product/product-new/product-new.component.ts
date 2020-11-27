import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb} from '@po-ui/ng-components';
import {ProductService} from '../product.service';
import {Product} from '../model/product';

@Component({
    selector: 'app-product-new',
    templateUrl: './product-new.component.html',
    styleUrls: ['./product-new.component.scss'],
})
export class ProductNewComponent implements OnInit {

    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/loja'},
            {label: 'Produtos', link: '/loja/produtos'},
            {label: 'Novo'},
        ],
    };

    constructor(
        public productService: ProductService,
    ) {
    }

    ngOnInit(): void {
    }

    save(item: Product): string {
        return `/loja/produtos/${item.id}/fotos`;
    }
}
