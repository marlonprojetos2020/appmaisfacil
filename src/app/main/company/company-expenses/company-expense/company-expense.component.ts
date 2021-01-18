import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import {
    PoModalComponent,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { Expense } from '../../../admin/companies/company-detail/admin-company-expenses/models/expense';
import { User } from '../../../admin/companies/model/user';
import { CompanyExpenseService } from '../company-expense.service';
import { ActivatedRoute } from '@angular/router';

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
    nameCompany: string;
    company$: User;

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
                this.nomeEmpresa = this.nameCompany;
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

    constructor(
        private companyExpenseService: CompanyExpenseService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.company$ = this.companyExpenseService
            .getCompanyExpense(1)
            .subscribe((data) => {
                this.nameCompany = data.name;
            });
    }

    prepareModal(expense: Expense): void {
        this.poModalDespesa.open();
    }
}
