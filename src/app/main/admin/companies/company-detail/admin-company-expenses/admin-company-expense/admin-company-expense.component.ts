import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/datatable-column';
import { Expense } from '../models/expense';
import { AdminCompanyExpenseService } from '../admin-company-expense.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { Observable } from 'rxjs';
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
    @Input() imagemDespesa: string = '';
    @Input() pdf: string;

    ehPdf = false;
    @ViewChild('modalDespesa', { static: true })
    poModalDespesa: PoModalComponent;

    company$: Observable<User>;

    companyName: string;

    serviceApi = `${environment.apiUrl}/company/expense`;
    tableActions: PoTableAction[] = [
        {
            label: 'Visualizar Despesa',
            action: (item) => {
                this.prepareModal(item);

                this.valorDespesa = item.value;
                this.tituloDespesa = item.description;
                this.dataDespesa = item.date;
                this.nomeEmpresa = this.companyName;
                this.tipoDespesa = item['type.label'];
                this.imagemDespesa = item.proofOfPaymentUrl;
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
            disabled: (item) => !item.proofOfPaymentUrl,
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

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    primaryAction: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalDespesa.close(),
    };

    constructor(
        private adminCompanyExpenseService: AdminCompanyExpenseService,
        private activatedRoute: ActivatedRoute,
        private companiesService: CompaniesService
    ) {}

    ngOnInit(): void {
        this.company$ = this.adminCompanyExpenseService
            .getCompany(this.activatedRoute.snapshot.params.id)
            .subscribe((data) => (this.companyName = data.name));

        this.companiesService
            .getUserCompany(this.activatedRoute.snapshot.params.id)
            .subscribe((data) => this.setBreadcrumb(data));
    }

    prepareModal(expense: Expense): void {
        this.poModalDespesa.open();
    }

    setBreadcrumb(user: User): void {
        this.breadcrumb.items.push(
            { label: 'Inicio', link: '/admin' },
            { label: 'Empresas', link: '/admin/empresas' },
            {
                label: user.userCompany.fantasyName
                    ? user.userCompany.fantasyName
                    : user.name,
                link: `/admin/empresa/${user.id}`,
            },
            { label: 'Minhas Despesas' }
        );
    }

    downloadPdf(): any {
        window.open(this.pdf, '_blank');
    }
}
