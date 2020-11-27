import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../product.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserDetails } from 'src/app/core/auth/model/user-details';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

    enabledInitialValue: boolean;

    product: Product;
    userDetails: UserDetails;
    breadcrumb: PoBreadcrumb;
    title: string;


    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private productService: ProductService,
        private authService: AuthService,
    ) {
    }

    ngOnInit(): void {
        this.product = this.activatedRoute.snapshot.data.product;

        this.breadcrumb = {
            items: [
                { label: 'Dashboard', link: '/loja' },
                { label: 'Produtos', link: '/loja/produtos' },
                { label: this.product.title },
            ],
        };

        this.title = this.product.title;

        this.authService.getUserDetails().subscribe(
            (response) => this.userDetails = response,
        );

        this.enabledInitialValue = this.product.enabled;
    }

    back(): void {
        this.router.navigateByUrl('/loja/produtos');
    }

    edit(): void {
        this.router.navigateByUrl(`/loja/produtos/${this.product.id}/editar`);
    }

    editPhotos(): void {
        this.router.navigateByUrl(`/loja/produtos/${this.product.id}/fotos`);
    }

    updateEnable(enabled: boolean): void {
        this.productService.updateEnabled(this.product.id, enabled)
            .subscribe(
                product => this.product = product,
            );
    }
}
