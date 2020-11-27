import { Component, Input, OnInit } from '@angular/core';
import { UserPhoto } from 'src/app/core/auth/model/user-photo';
import { Product } from 'src/app/main/store/product/model/product';

@Component({
  selector: 'app-product-ad',
  templateUrl: './product-ad.component.html',
  styleUrls: ['./product-ad.component.scss'],
})
export class ProductAdComponent implements OnInit {

  @Input() storeName: string;
  @Input() storePhoto: UserPhoto;
  @Input() product: Product;

  enableText = false;
  productPhotosUrls: string[];

  ngOnInit(): void {
    this.productPhotosUrls = this.product.productPhotos.map(item => item.url);
  }

  showText(): void {
    this.enableText = true;
  }

}
