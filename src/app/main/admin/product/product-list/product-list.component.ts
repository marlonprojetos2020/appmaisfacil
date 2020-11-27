import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PoBreadcrumb, PoTableAction} from '@po-ui/ng-components';
import {environment} from '../../../../../environments/environment';
import {DatatableColumn} from '../../../../shared/component/page-datatable/page-datatable/datatable-column';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  breadcrumb: PoBreadcrumb = {
    items: [
        {label: 'Dashboard', link: '/admin'},
        {label: 'Anúncio'},
    ],
  };

  serviceApi = `${environment.apiUrl}/products/admin/p/search`;

  tableActions: PoTableAction[] = [
    {label: 'Ver loja', action: item => this.router.navigateByUrl(`/admin/lojas/${item.storeId}`)},
    {label: 'Ver Anúncio', action: item => this.router.navigateByUrl(`/admin/produtos/${item.id}`)},
];

  columns: DatatableColumn[] = [
    {property: 'title', label: 'Titulo'},
    {property: 'storeName', label: 'Loja'},
    {property: 'availableAmount', label: 'quantidade'},
    {property: 'finalPrice', label: 'Preço', type: 'currency'},
];

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

}
