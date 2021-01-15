import { Component, OnInit } from '@angular/core';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';

@Component({
    templateUrl: './company-expense.component.html',
})
export class CompanyExpenseComponent implements OnInit {
    columns: DatatableColumn[] = [
        { label: 'Tipo', property: 'type.label' },
        {
            label: 'Título',
            property: 'description',
        },
        {
            label: 'Data',
            property: 'date',
        },
        {
            label: 'Valor',
            property: 'value',
        },
    ];

    tableActions: PoTableAction[] = [];

    serviceApi = `${environment.apiUrl}/company/expense`;

    actions: PoPageAction[] = [
        {
            label: 'Nova Despesa',
            icon: 'po-icon-plus',
            url: '/empresa/despesas/nova-despesa',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
