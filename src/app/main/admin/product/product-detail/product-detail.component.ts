import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/main/store/product/model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  breadcrumb: PoBreadcrumb;
  title: string;

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
    ) { }

  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data.product;

    this.breadcrumb = {
      items: [
        { label: 'Dashboard', link: '/admin'},
        { label: 'Anúncios', link: '/admin/produtos' },
        { label: this.product.title },
      ],
    };

    this.title = this.product.title;
  }

  back(): void {
    this.router.navigateByUrl('/admin/produtos');
}

}
