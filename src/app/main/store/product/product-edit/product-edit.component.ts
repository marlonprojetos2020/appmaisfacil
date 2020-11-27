import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb} from '@po-ui/ng-components';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../model/product';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {

    breadcrumb: PoBreadcrumb;

    product: Product;

    detailPage: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        public productService: ProductService,
    ) {
    }

    ngOnInit(): void {
        this.product = this.activatedRoute.snapshot.data.product;

        this.breadcrumb = {
            items: [
                {label: 'Dashboard', link: '/loja'},
                {label: 'Produtos', link: '/loja/produtos'},
                {label: this.product.title, link: `/loja/produtos/${this.product.id}`},
                {label: 'Editar'},
            ],
        };

        this.detailPage = `/loja/produtos/${this.product.id}`;
    }

}
