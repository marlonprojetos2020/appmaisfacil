import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import {
    PoModalComponent,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { Expense } from '../../../admin/companies/company-detail/admin-company-expenses/models/expense';

@Component({
    templateUrl: './company-expense.component.html',
    styleUrls: ['company-expense.component.scss'],
})
export class CompanyExpenseComponent implements OnInit {
    @Input() tituloDespesa: string = '';
    @Input() nomeEmpresa: string = '';
    @Input() tipoDespesa: string = '';
    @Input() dataDespesa: string = '';
    @Input() valorDespesa: number;
    @Input() imagemDespesa: string = '';

    @ViewChild('modalDespesa', { static: true })
    poModalDespesa: PoModalComponent;

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

    tableActions: PoTableAction[] = [
        {
            label: 'Visualizar',
            action: (item) => {
                this.prepareModal(item);
                console.log(item);
                this.valorDespesa = item.value;
                this.tituloDespesa = item.description;
                this.dataDespesa = item.date;
                this.tipoDespesa = item.label;
                this.tipoDespesa = item['type.label'];
                this.imagemDespesa = item.proofOfPaymentUrl;
                this.nomeEmpresa;
            },
        },
    ];

    serviceApi = `${environment.apiUrl}/company/expense`;

    actions: PoPageAction[] = [
        {
            label: 'Nova Despesa',
            icon: 'po-icon-plus',
            url: '/empresa/despesas/nova-despesa',
        },
    ];

    constructor() {}

    ngOnInit(): void {
        const company = JSON.parse(sessionStorage.CREDENTIALS_KEY);

        this.nomeEmpresa = company.userDetails.name;
    }

    prepareModal(expense: Expense): void {
        this.poModalDespesa.open();
    }
}
