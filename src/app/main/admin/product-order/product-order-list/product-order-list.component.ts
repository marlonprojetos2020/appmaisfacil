import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {PoBreadcrumb, PoPageAction, PoTableAction} from '@po-ui/ng-components';
import {environment} from '../../../../../environments/environment';
import {DatatableColumn} from '../../../../shared/component/page-datatable/page-datatable/datatable-column';

@Component({
  selector: 'app-product-order-list',
  templateUrl: './product-order-list.component.html',
  styleUrls: ['./product-order-list.component.scss']
})
export class ProductOrderListComponent {

  breadcrumb: PoBreadcrumb = {
    items: [
        {label: 'Dashboard', link: '/admin'},
        {label: 'Pedidos'},
    ],
  };

  serviceApi = `${environment.apiUrl}/product-order/admin/p/search`;

  columns: DatatableColumn[] = [
      {property: 'productStoreName', label: 'Loja'},
      {property: 'clientName', label: 'Cliente'},
      {property: 'productTitle', label: 'Produto'},
      {property: 'quantity', label: 'Quantidade'},
      {property: 'totalPrice', label: 'Total', type: 'currency'},
  ];
  constructor(         private router: Router,
    ) { }

}
