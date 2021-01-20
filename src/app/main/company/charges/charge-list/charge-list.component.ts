import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import { Expense } from '../../../admin/companies/company-detail/admin-company-expenses/models/expense';

@Component({
    templateUrl: './charge-list.component.html',
    styleUrls: ['charge-list.component.scss'],
})
export class ChargeListComponent implements OnInit {
    @ViewChild('modalCobranca', { static: true })
    poModalCobranca: PoModalComponent;
    @Input() nomeEmpresa: string;
    @Input() status: string;
    @Input() tipo: string;
    @Input() vencimento: string;
    @Input() valor: number;
    @Input() titulo: string;

    id: number;

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Cobranças', link: '/empresa/cobranca' },
        ],
    };

    urlUploadDocument: string;

    pageActions: PoPageAction[] = [];

    serviceApi = `${environment.apiUrl}/billing/p/search`;

    tableActions: PoTableAction[] = [];

    columns: DatatableColumn[] = [
        {
            label: 'Status',
            property: 'status',
        },

        {
            label: 'Titulo',
            property: 'description',
        },
        {
            label: 'Tipo',
            property: 'type.label',
        },
        {
            label: 'Vencimento',
            property: 'dueDate',
        },
        {
            label: 'Valor',
            property: 'value',
        },
    ];

    constructor() {}

    ngOnInit(): void {
        const company = JSON.parse(sessionStorage.CREDENTIALS_KEY);

        this.nomeEmpresa = company.userDetails.name;

        this.tableActions.push({
            label: 'Visualizar',
            action: (item) => {
                console.log(item);
                this.prepareModal(item);
                this.status = item.status;
                this.tipo = item['type.label'];
                this.valor = item.value;
                this.vencimento = item.dueDate;
                this.titulo = item.description;
                this.nomeEmpresa;
                this.id = item.id;
                this.urlUploadDocument = `${environment.apiUrl}/company/billing/${this.id}/proof-of-payment`;
            },
        });

        console.log(this.id);
    }

    prepareModal(expense: Expense): void {
        this.poModalCobranca.open();
    }

    sendPayment(): void {}
}
