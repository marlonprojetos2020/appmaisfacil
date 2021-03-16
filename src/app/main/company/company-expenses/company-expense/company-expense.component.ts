import { Component, OnInit, ViewChild } from '@angular/core';
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
import { Router } from '@angular/router';

@Component({
    templateUrl: './company-expense.component.html',
    styleUrls: ['company-expense.component.scss'],
})
export class CompanyExpenseComponent implements OnInit {

    modalExpense: Expense = null;
    nomeEmpresa: string = '';
    pdf: string;

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
            label: 'Ver Despesa',
            action: (item) => this.prepareModal(item),
            disabled: (item) => item.proofOfPaymentUrl == null,
        },
        {
            label: 'Editar',
            action: (item) => this.router.navigate(['empresa', 'editar-despesa', item.id]),
        },
        // {
        //     label: 'Baixar Despesa',
        //     action: (item) => window.open(item.proofOfPaymentUrl, '_blank'),
        // },
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

    constructor(
        private companyExpenseService: CompanyExpenseService,
        private router: Router,

    ) {}

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
        this.modalExpense = expense;
        this.ehPdf = this.modalExpense.proofOfPaymentUrl.indexOf('pdf') < 0 ? false : true;
        this.poModalDespesa.open();
    }

    download(link): any {
        window.open(link, '_blank');
    }
}
