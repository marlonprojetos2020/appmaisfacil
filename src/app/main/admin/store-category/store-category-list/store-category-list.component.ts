import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb, PoPageAction, PoTableAction} from '@po-ui/ng-components';
import {environment} from '../../../../../environments/environment';
import {DatatableColumn} from '../../../../shared/component/page-datatable/page-datatable/datatable-column';
import {Router} from '@angular/router';

@Component({
    selector: 'app-store-category-list',
    templateUrl: './store-category-list.component.html',
    styleUrls: ['./store-category-list.component.scss'],
})
export class StoreCategoryListComponent implements OnInit {

    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/admin'},
            {label: 'Categorias'},
        ],
    };
    pageActions: PoPageAction[] = [
        {label: 'Novo', url: '/admin/lojas/categorias/novo'},
    ];

    serviceApi = `${environment.apiUrl}/store/categories/p/search`;
    tableActions: PoTableAction[] = [
        {label: 'Editar', action: item => this.router.navigateByUrl(`/admin/lojas/categorias/${item.id}/editar`)},
    ];
    columns: DatatableColumn[] = [
        {property: 'id', label: 'Id', visible: false},
        {property: 'name', label: 'Nome'},
    ];

    constructor(
        private router: Router,
    ) {
    }

    ngOnInit(): void {
    }

}
