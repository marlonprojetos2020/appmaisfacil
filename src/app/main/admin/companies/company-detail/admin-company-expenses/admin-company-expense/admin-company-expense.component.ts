import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
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
    @Input() imagemDespesa: string =
        'https://pm1.narvii.com/6371/6ec0cd87bdc53c03fefa243aa0c9412b707c76eb_00.jpg';
    @ViewChild('modalDespesa', { static: true })
    poModalDespesa: PoModalComponent;

    company$: Observable<User>;

    companyName: string;

    serviceApi = `${environment.apiUrl}/company/expense`;
    tableActions: PoTableAction[] = [
        {
            label: 'Visualizar',
            action: (item) => {
                this.prepareModal(item);

                this.valorDespesa = item.value;
                this.tituloDespesa = item.description;
                this.dataDespesa = item.date;
                this.nomeEmpresa = this.companyName;
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

    breadcrumb: PoBreadcrumb = {
        items: [],
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
                label: user.userCompany.fantasyName,
                link: `/admin/empresa/${user.id}`,
            },
            { label: 'Minhas Despesas' }
        );
    }
}
