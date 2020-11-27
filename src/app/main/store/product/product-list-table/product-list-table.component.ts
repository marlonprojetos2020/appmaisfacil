import { Component, OnInit } from '@angular/core';
import {PoBreadcrumb, PoPageAction, PoTableAction} from '@po-ui/ng-components';
import {environment} from '../../../../../environments/environment';
import {DatatableColumn} from '../../../../shared/component/page-datatable/page-datatable/datatable-column';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list-table',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list-table.component.scss']
})
export class ProductListTableComponent implements OnInit {


    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/admin'},
            {label: 'Produtos'},
        ],
    };
    pageActions: PoPageAction[] = [
        {label: 'Novo', url: '/loja/produtos/novo'},
    ];

    serviceApi = `${environment.apiUrl}/products/store/p/search`;
    tableActions: PoTableAction[] = [
        {label: 'Visualizar', action: item => this.router.navigateByUrl(`/loja/produtos/${item.id}`)},
        {label: 'Editar', action: item => this.router.navigateByUrl(`/loja/produtos/${item.id}/editar`)},
    ];
    columns: DatatableColumn[] = [
        {property: 'id', label: 'Id', visible: false},
        {property: 'enabled', label: 'Ativo', type: 'boolean', disableSearch: true, disableSort: true},
        {property: 'readyForSale', label: 'Pronto para venda?', type: 'boolean', disableSearch: true, disableSort: true},
        {property: 'title', label: 'Título'},
        {property: 'startDateTime', label: 'Inicia em', type: 'dateTime', disableSearch: true},
        {property: 'endDateTime', label: 'Termina em', type: 'dateTime', disableSearch: true},
        {property: 'expired', label: 'Expirado', type: 'boolean', visible: false, disableSearch: true, disableSort: true},
        {property: 'availableAmount', label: 'Qtdd. disponível', type: 'number', disableSearch: true, disableSort: true},
        {property: 'soldAmount', label: 'Qtdd. vendida', type: 'number', visible: false, disableSearch: true},
        {property: 'totalAmount', label: 'Qtdd. total', type: 'number', visible: false, disableSearch: true},
        {property: 'price', label: 'Preço', type: 'currency', disableSearch: true},
        {property: 'percentageDiscount', label: 'Desconto (%)', type: 'number', disableSearch: true},
        {property: 'moneyDiscount', label: 'Desconto (R$)', type: 'currency', visible: false, disableSearch: true, disableSort: true},
        {property: 'finalPrice', label: 'Preço final', type: 'currency', disableSearch: true, disableSort: true},
        {property: 'percentageCommission', label: 'Comissão (%)', type: 'number', disableSearch: true},
        {property: 'moneyCommission', label: 'Comissão (R$)', type: 'currency', visible: false, disableSearch: true, disableSort: true},
    ];

    constructor(
        private router: Router,
    ) {
    }

    ngOnInit(): void {
    }

}
