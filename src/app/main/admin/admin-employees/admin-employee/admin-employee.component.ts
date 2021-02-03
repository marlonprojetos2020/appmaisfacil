import { Component, OnInit } from '@angular/core';
import {
    PoBreadcrumb,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';

@Component({
    templateUrl: 'admin-employee.component.html',
})
export class AdminEmployeeComponent implements OnInit {
    pageActions: PoPageAction[] = [
        {
            label: 'Demissões Pendentes',
            url: '/admin/funcionarios/confirmar-demissao',
        },
    ];

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Funcionários', link: '/admin/funcionario' },
        ],
    };

    serviceApi = `${environment.apiUrl}/employee/p/search`;

    tableActions: PoTableAction[] = [];

    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'statusText',
        },
        {
            label: 'Empresa',
            property: 'companyName',
        },
        {
            label: 'Funcionário',
            property: 'name',
        },
        {
            label: 'Categoria',
            property: 'category',
        },
        {
            label: 'Admissão',
            property: 'admissionAt',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
