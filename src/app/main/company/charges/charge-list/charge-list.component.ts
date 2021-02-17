import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoNotificationService,
    PoTableAction,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import { Router } from '@angular/router';
import { Charge } from '../../../../shared/components/charge-form/models/charge';
import { ChargeListService } from '../charge-list.service';

@Component({
    templateUrl: './charge-list.component.html',
    styleUrls: ['charge-list.component.scss'],
})
export class ChargeListComponent implements OnInit {
    @Input() nomeEmpresa: string;
    @Input() status: string;
    @Input() tipo: string;
    @Input() vencimento: string;
    @Input() valor: number;
    @Input() titulo: string;
    @Input() imagemCobranca: string;
    @Input() pdfCobranca: string;
    isPdfCobranca = false;

    idCharge: number;

    urlUploadDocument: string;

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Cobranças', link: '/admin/cobrancas' },
        ],
    };

    @ViewChild('modalCobranca', { static: true })
    poModalCobranca: PoModalComponent;

    closeAction: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalCobranca.close(),
    };

    serviceApi = `${environment.apiUrl}/company/billing/p/search`;
    tableActions: PoTableAction[] = [];

    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'statusText',
        },
        {
            label: 'Título',
            property: 'description',
        },
        { label: 'Tipo', property: 'type.label' },
        {
            label: 'Vencimento',
            property: 'dueDate',
            type: 'date',
            format: 'dd/MM/yyyy',
        },
        { label: 'Valor', property: 'value', type: 'currency', format: 'BRL' },
    ];

    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
        maxFileSize: 5242880,
        maxFiles: 1,
    };

    constructor(
        private router: Router,
        private poNotificationService: PoNotificationService,
        private chargeListService: ChargeListService
    ) {}

    ngOnInit(): void {
        const company = JSON.parse(sessionStorage.CREDENTIALS_KEY);

        this.chargeListService
            .getCompany(company.userDetails.id)
            .subscribe((data) =>
                data.userCompany.fantasyName
                    ? (this.nomeEmpresa = data.userCompany.fantasyName)
                    : (this.nomeEmpresa = data.name)
            );

        this.tableActions.push(
            {
                label: 'Pagar Cobrança',
                action: (item) => {
                    this.prepareModal(item);
                    this.status = item.statusText;
                    this.tipo = item['type.label'];
                    this.valor = item.value;
                    this.vencimento = item.dueDate;
                    this.titulo = item.description;
                    this.nomeEmpresa;
                    this.imagemCobranca = item.billingFileUrl;
                    this.setUrlDocument(item.id);
                    this.idCharge = item.id;
                    if (this.imagemCobranca.indexOf('pdf') < 0) {
                        this.isPdfCobranca = false;
                    } else {
                        this.isPdfCobranca = true;
                        this.pdfCobranca = item.billingFileUrl;
                    }
                },
                disabled: (item) => item.status !== 'PENDING',
            },
            {
                label: 'Baixar Comprovante',
                action: (item) => window.open(item.proofOfPaymentUrl, '_blank'),
                disabled: (item) => !item.proofOfPaymentUrl,
            },
            {
                label: 'Baixar Cobrança',
                action: (item) => window.open(item.billingFileUrl, '_blank'),
            }
        );
    }

    prepareModal(charge: Charge): void {
        this.poModalCobranca.open();
    }

    setUrlDocument(id: number): void {
        this.urlUploadDocument = `${environment.apiUrl}/company/billing/${id}/proof-of-payment`;
    }

    downloadPdfCobranca(): any {
        window.open(this.pdfCobranca, '_blank');
    }

    downloadImgCobranca(): any {
        window.open(this.imagemCobranca, '_blank');
    }

    success(): void {
        const message = 'Comprovante de pagamento carregado com sucesso';
        this.poNotificationService.success(message);
        this.poModalCobranca.close();
    }
}
