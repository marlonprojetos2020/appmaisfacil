import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoNotificationService,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';

import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/datatable-column';
import { User } from '../../../model/user';
import { CompaniesService } from '../../../companies.service';
import { PageDatatableComponent } from 'src/app/shared/components/page-datatable/page-datatable/page-datatable.component';
import { AdminBankStatementsService } from 'src/app/main/admin/admin-bank-statements/admin-bank-statements.service';

@Component({
    templateUrl: './admin-company-bank-statement.component.html',
})
export class AdminCompanyBankStatementComponent implements OnInit {
    @Input() companyName: string;
    @Input() month: string;
    @Input() status: string;
    @Input() bankName: string;
    @Input() image: string;
    @Input() pdfPendente: string;
    @Input() pdfPago: string;
    idStatement: number;

    @ViewChild(PageDatatableComponent)
    dataTableComponent: PageDatatableComponent;

    @ViewChild('modalExtratoPendente', { static: true })
    poModalExtratoPendente: PoModalComponent;

    @ViewChild('modalExtratoAprovado', { static: true })
    poModalExtratoAprovado: PoModalComponent;

    ehPdfPendente = false;
    ehPdfPago = false;

    primaryAction: PoModalAction = {
        label: 'Aprovar',
        action: () => {
            this.adminBankStatementService
                .aprovedStatement(this.idStatement)
                .subscribe(() => {
                    this.dataTableComponent.ngOnInit();
                    this.poNotification.success('Extrato bancário aprovado');
                });
            this.poModalExtratoPendente.close();
        },
    };

    secondaryAction: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalExtratoPendente.close(),
    };

    pageActions: PoPageAction[] = [];
    serviceApi = '';

    columns: DatatableColumn[] = [
        {
            label: 'Status',
            property: 'status',
            type: 'label',
            labels: [
                { value: 'PENDING', color: 'color-07', label: 'Pendente' },
                { value: 'PENDING_REVIEW', color: 'color-08', label: 'Revisão' },
                { value: 'OK', color: 'color-12', label: 'OK' },
            ],
        },
        {
            label: 'Banco',
            property: 'bankAccount.bankName',
        },
        {
            label: 'Conta',
            property: 'bankAccount.accountNumber',
        },
        {
            label: 'Agência',
            property: 'bankAccount.agency',
        },
        {
            label: 'Mês de Referência',
            property: 'monthText',
        },
    ];

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    tableActions: PoTableAction[] = [
        {
            label: 'Aprovar Extrato',
            action: (item) => {
                item.bankAccountCompanyFantasyName
                    ? (this.companyName = item.bankAccountCompanyFantasyName)
                    : (this.companyName = item.bankAccountCompanyName);
                this.prepareModal(item);
                this.status = item.statusText;
                this.bankName = item['bankAccount.bankName'];
                this.month = item.month;
                this.image = item.attachmentUrl;
                this.idStatement = item.id;
                if (this.image.indexOf('pdf') < 0) {
                    this.ehPdfPendente = false;
                } else {
                    this.ehPdfPendente = true;
                    this.pdfPendente = item.attachmentUrl;
                }
            },
            disabled: (item) => item.status !== 'PENDING_REVIEW',
        },
        {
            label: 'Baixar Comprovante',
            action: (item) => window.open(item.attachmentUrl, '_blank'),
            disabled: (item) =>
                item.status !== 'OK' && item.status !== 'PENDING_REVIEW',
        },
        {
            label: 'Visualizar Extrato',
            action: (item) => {
                this.poModalExtratoAprovado.open();
                this.status = item.statusText;
                this.bankName = item['bankAccount.bankName'];
                item.bankAccountCompanyFantasyName
                    ? (this.companyName = item.bankAccountCompanyFantasyName)
                    : (this.companyName = item.bankAccountCompanyName);
                this.image = item.attachmentUrl;
                this.month = item.month;
                if (this.image.indexOf('pdf') < 0) {
                    this.ehPdfPago = false;
                } else {
                    this.ehPdfPago = true;
                    this.pdfPago = item.attachmentUrl;
                }
            },
            disabled: (item) => item.status !== 'OK',
        },
    ];

    // ModalExtratoAprovado

    closeModalExtratoAprovado: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalExtratoAprovado.close(),
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private companiesService: CompaniesService,
        private poNotification: PoNotificationService,
        private adminBankStatementService: AdminBankStatementsService,
    ) {}

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.serviceApi = `${environment.apiUrl}/statement/p/search?companyId=${id}`;
        this.companiesService
            .getUserCompany(this.activatedRoute.snapshot.params.id)
            .subscribe((data) => this.setBreadcrumb(data));
    }

    setBreadcrumb(user: User): void {
        this.breadcrumb.items.push(
            { label: 'Inicio', link: '/admin' },
            { label: 'Empresas', link: '/admin/empresas' },
            {
                label: user.userCompany?.fantasyName
                    ? user.userCompany?.fantasyName
                    : user.name,
                link: `/admin/empresa/${user.id}`,
            },
            { label: 'Extratos' }
        );
    }

    prepareModal(extrato: any): void {
        this.poModalExtratoPendente.open();
    }

    downloadPdfPendente(): any {
        window.open(this.pdfPendente, '_blank');
    }

    downloadImg(): any {
        window.open(this.image, '_blank');
    }

    downloadPdfPago(): any {
        window.open(this.pdfPago, '_blank');
    }
}
