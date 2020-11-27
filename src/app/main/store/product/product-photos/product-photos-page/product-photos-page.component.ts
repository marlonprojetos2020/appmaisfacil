import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';
import {PoBreadcrumb, PoPageAction} from '@po-ui/ng-components';

@Component({
    selector: 'app-product-photos-page',
    templateUrl: './product-photos-page.component.html',
    styleUrls: ['./product-photos-page.component.scss'],
})
export class ProductPhotosPageComponent implements OnInit {

    breadcrumb: PoBreadcrumb;

    product: Product;
    title: string;
    actions: PoPageAction[];

    constructor(
        private activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.product = this.activatedRoute.snapshot.data.product;
        this.title = `Fotos do produto: ${this.product.title}`;

        this.breadcrumb = {
            items: [
                {label: 'Dashboard', link: '/loja'},
                {label: 'Produtos', link: '/loja/produtos'},
                {label: this.product.title, link: `/loja/produtos/${this.product.id}`},
                {label: 'Fotos'},
            ],
        };
        this.actions = [
            {
                label: 'Continuar',
                url: `/loja/produtos/${this.product.id}`,
                icon: 'po-icon-arrow-right',
            },
        ];
    }
}
