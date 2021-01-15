import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PoModalComponent, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/datatable-column';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminCompanyExpenseService } from '../admin-company-expense.service';
import { Expense } from '../models/expense';
import { CompaniesService } from '../../../companies.service';

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
        'https://s2.glbimg.com/1CaAbKUXmw9_27aW-oP0XCiTVDc=/0x0:3240x2160/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/X/1/6KAgaSQaeJ4NPq2XLzUQ/birdseclipse-caldas-3240.jpg';

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
