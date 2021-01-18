import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PoModalComponent, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/datatable-column';
import { Expense } from '../models/expense';

@Component({
    templateUrl: 'admin-company-expense.component.html',
    styleUrls: ['admin-company-expensa.component.scss'],
})
export class AdminCompanyExpenseComponent implements OnInit {
    @Input() tituloDespesa: string = '';
    @Input() nomeEmpresa: string = '';
    @Input() tipoDespesa: string = '';
    @Input() dataDespesa: string = '';
    @Input() valorDespesa: number;
    @Input() imagemDespesa: string =
        'https://pm1.narvii.com/6371/6ec0cd87bdc53c03fefa243aa0c9412b707c76eb_00.jpg';
    @ViewChild('modalDespesa', { static: true })
    poModalDespesa: PoModalComponent;

    serviceApi = `${environment.apiUrl}/company/expense`;
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
            },
        },
    ];
    columns: DatatableColumn[] = [
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
            property: 'date',
        },
        {
            label: 'Valor',
            property: 'value',
        },
    ];

    constructor() {}

    ngOnInit(): void {}

    prepareModal(expense: Expense): void {
        this.poModalDespesa.open();
    }
}
