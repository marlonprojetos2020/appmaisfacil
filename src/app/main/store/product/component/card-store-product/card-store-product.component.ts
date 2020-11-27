import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import {Router} from '@angular/router';


@Component({
  selector: 'app-card-store-product',
  templateUrl: './card-store-product.component.html',
  styleUrls: ['./card-store-product.component.scss']
})
export class CardStoreProductComponent implements OnInit {

  @Input() produto: Product;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  acessarProduto(): void{
    this.router.navigateByUrl(`/loja/produtos/${this.produto.id}`);
  }

}
