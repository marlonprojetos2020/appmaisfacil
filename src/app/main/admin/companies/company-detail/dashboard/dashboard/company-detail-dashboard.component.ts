import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoPageAction } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { CompaniesService } from '../../../companies.service';
import { User } from '../../../model/user';
import { CompanyDetailDashboardService } from '../company-detail-dashboard.service';
import { CurrencyPipe } from '@angular/common';

@Component({
    templateUrl: './company-detail-dashboard.component.html',
    styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailDashboardComponent implements OnInit {
    title = '';
    company$: Observable<User> = null;

    companyId: number;

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    linkCobranca = '';

    linkNota = '';

    linkFuncionario = '';

    linkExtrato = '';

    billingPending = [];

    billingRefused = [];

    billingPendingReview = [];

    statementsPending = [];

    statementsPendingReview = [];

    employeePendingFired = [];

    notaFiscalCancelada = [];

    notaFiscalProcessando = [];

    items: [];

    // TEXTO DOS ACCORDIONS

    billingPendingText = '';

    billingRefusedText = '';

    billingPendingReviewText = '';

    statementsPendingText = '';

    statementsPendingReviewText = '';

    employeePendingFiredText = '';

    notaFiscalCanceladaText = '';

    notaFiscalProcessandoText = '';

    // Verifica se esta tudo ok pra alterar o estilo do accordion

    billingPendingOk = false;

    billingRefusedOk = false;

    billingPendingReviewOk = false;

    statementsPendingOk = false;

    statementsPendingReviewOk = false;

    employeePendingFiredOk = false;

    notaFiscalCanceladaOk = false;

    notaFiscalProcessandoOk = false;

    public readonly actions: Array<PoPageAction> = [
        {
            label: 'Editar Empresa',
            url: `admin/empresa/${this.activetedRoute.snapshot.params.id}/editar`,
        },
    ];

    constructor(
        private activetedRoute: ActivatedRoute,
        private companyDetailService: CompaniesService,
        private companyDetailDashboardService: CompanyDetailDashboardService,
        private router: Router,
        private currencyPipe: CurrencyPipe
    ) {}

    ngOnInit(): void {
        this.company$ = this.companyDetailService.getUserCompany(
            this.activetedRoute.snapshot.params.id
        );

        const idCompany = this.activetedRoute.snapshot.params.id;

        this.linkCobranca = `/admin/empresa/${idCompany}/cobrancas`;

        this.linkExtrato = `/admin/empresa/${idCompany}/extrato`;

        this.linkFuncionario = `/admin/empresa/${idCompany}/funcionarios`;

        this.linkNota = `/admin/empresa/${idCompany}/nota-fiscal`;

        this.companyDetailService
            .getUserCompany(this.activetedRoute.snapshot.params.id)
            .subscribe((data) => this.setBreadcrumb(data));

        this.companyId = this.activetedRoute.snapshot.params.id;

        this.companyDetailDashboardService
            .getBilling('PENDING', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.billingPendingText = 'N??o h?? cobrancas pendentes';
                } else {
                    data.items.map((billing) => {
                        this.billingPending.push(billing.description);
                        this.billingPendingText =
                            'Voc?? tem cobran??as pendentes :';
                        this.billingPendingOk = true;
                    });
                }
            });

        this.companyDetailDashboardService
            .getBilling('REFUSED', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.billingRefusedText = 'N??o h?? cobran??as recusadas';
                } else {
                    data.items.map((billing) => {
                        this.billingRefused.push(billing.description);
                        this.billingRefusedText =
                            'Voc?? tem cobran??as recusadas :';
                        this.billingRefusedOk = true;
                    });
                }
            });

        this.companyDetailDashboardService
            .getBilling('PENDING_REVIEW', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.billingPendingReviewText =
                        'N??o h?? cobran??as em analise';
                } else {
                    data.items.map((billing) => {
                        this.billingPendingReview.push(billing.description);
                        this.billingPendingReviewOk = true;
                        this.billingPendingReviewText =
                            'Voc?? tem cobran??as em analise :';
                    });
                }
            });

        // Get Statements

        this.companyDetailDashboardService
            .getBankStatement('PENDING', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.statementsPendingText = 'N??o h?? extratos pendentes';
                } else {
                    data.items.map((statements) => {
                        this.statementsPending.push(
                            'Banco:' +
                            ' ' +
                            statements.bankAccount.bankName +
                            ' - ' +
                            'M??s Referente:' +
                            ' ' +
                            statements.monthText
                        );
                        this.statementsPendingOk = true;
                        this.statementsPendingText =
                            'Voc?? tem extratos pendentes :';
                    });
                }
            });

        this.companyDetailDashboardService
            .getBankStatement('PENDING_REVIEW', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.statementsPendingReviewText =
                        'N??o h?? extratos em analise';
                } else {
                    data.items.map((statements) => {
                        this.statementsPendingReview.push(
                            'Banco:' +
                            ' ' +
                            statements.bankAccount.bankName +
                            ' - ' +
                            'M??s Referente:' +
                            ' ' +
                            statements.monthText
                        );
                        this.statementsPendingReviewOk = true;
                        this.statementsPendingReviewText =
                            'Voc?? tem extratos em analise :';
                    });
                }
            });

        this.companyDetailDashboardService
            .getEmployee('PENDING_FIRED', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.employeePendingFiredText =
                        'N??o h?? demiss??es pendentes';
                } else {
                    data.items.map((employee) => {
                        this.employeePendingFired.push(employee.name);
                        this.employeePendingFiredOk = true;
                        this.employeePendingFiredText =
                            'Voc?? tem demiss??es pendentes :';
                    });
                }
            });

        this.companyDetailDashboardService
            .getNotaFiscal('PROCESSING', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.notaFiscalProcessandoText =
                        'N??o h?? notas ficais em analise';
                } else {
                    data.items.map((nota) => {
                        this.notaFiscalProcessando.push(
                            nota.client.name +
                            ' ' +
                            'total' +
                            ' ' +
                            this.currencyPipe.transform(
                                nota.totalAmount,
                                'BRL'
                            )
                        );
                        this.notaFiscalProcessandoText =
                            'Voc?? tem notas fiscais em analise :';
                        this.notaFiscalProcessandoOk = true;
                    });
                }
            });

        this.companyDetailDashboardService
            .getNotaFiscal('WAITING_CANCELEMENT', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.notaFiscalCanceladaText =
                        'N??o h?? notas ficais em analise';
                } else {
                    data.items.map((nota) => {
                        this.notaFiscalCancelada.push(nota.client.name);
                        this.notaFiscalCanceladaOk = true;
                        this.notaFiscalCanceladaText =
                            'Voc?? tem notas fiscais canceladas :';
                    });
                }
            });
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
            }
        );
    }

    editedCompany(): void {
        this.router.navigateByUrl(
            `admin/empresa/${this.activetedRoute.snapshot.params.id}/editar`
        );
    }
}
