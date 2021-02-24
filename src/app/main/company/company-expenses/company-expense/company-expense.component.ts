import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { Expense } from '../../../admin/companies/company-detail/admin-company-expenses/models/expense';
import { CompanyExpenseService } from '../company-expense.service';

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
    @Input() pdf: string;

    ehPdf = false;

    @ViewChild('modalDespesa', { static: true })
    poModalDespesa: PoModalComponent;

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Minhas Despesas', link: '/empresa/despesas' },
        ],
    };

    columns: DatatableColumn[] = [
        { label: 'Tipo', property: 'type.label' },
        {
            label: 'Título',
            property: 'description',
        },
        {
            label: 'Data',
            property: 'date',
            type: 'date',
            format: 'dd/MM/yyyy',
        },
        {
            label: 'Valor',
            property: 'value',
            type: 'currency',
            format: 'BRL',
        },
    ];

    tableActions: PoTableAction[] = [
        {
            label: 'Visualizar',
            action: (item) => {
                this.prepareModal(item);
                this.valorDespesa = item.value;
                this.tituloDespesa = item.description;
                this.dataDespesa = item.date;
                this.tipoDespesa = item.label;
                this.tipoDespesa = item['type.label'];
                this.imagemDespesa = item.proofOfPaymentUrl;
                this.nomeEmpresa;
                if (this.imagemDespesa.indexOf('pdf') < 0) {
                    this.ehPdf = false;
                } else {
                    this.ehPdf = true;
                    this.pdf = item.attachmentUrl;
                }
            },
        },
        {
            label: 'Baixar Despesa',
            action: (item) => window.open(item.proofOfPaymentUrl, '_blank'),
        },
    ];

    serviceApi = `${environment.apiUrl}/company/expense/p/search`;

    actions: PoPageAction[] = [
        {
            label: 'Nova Despesa',
            icon: 'po-icon-plus',
            url: '/empresa/despesas/nova-despesa',
        },
    ];

    primaryAction: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalDespesa.close(),
    };

    constructor(private companyExpenseService: CompanyExpenseService) {}

    ngOnInit(): void {
        this.companyExpenseService
            .getCompanyExpense()
            .subscribe((data) =>
                data.userCompany?.fantasyName
                    ? (this.nomeEmpresa = data.userCompany.fantasyName)
                    : (this.nomeEmpresa = data.name)
            );
    }

    prepareModal(expense: Expense): void {
        this.poModalDespesa.open();
    }

    downloadPdf(): any {
        window.open(this.pdf, '_blank');
    }

    downloadImg(): any {
        window.open(this.imagemDespesa, '_blank');
    }
}
