import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb, PoPageAction } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { CompaniesService } from '../../../companies.service';
import { User } from '../../../model/user';
import { CompanyDetailDashboardService } from '../company-detail-dashboard.service';

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
        private companyDetailDashboardService: CompanyDetailDashboardService
    ) {}

    ngOnInit(): void {
        this.company$ = this.companyDetailService.getUserCompany(
            this.activetedRoute.snapshot.params.id
        );

        this.companyDetailService
            .getUserCompany(this.activetedRoute.snapshot.params.id)
            .subscribe((data) => this.setBreadcrumb(data));

        this.companyId = this.activetedRoute.snapshot.params.id;

        this.companyDetailDashboardService
            .getBilling('PENDING', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.billingPendingText = 'Não há cobrancas pendentes';
                } else {
                    data.items.map((billing) => {
                        this.billingPending.push(billing.description);
                        this.billingPendingText =
                            'Você tem cobranças pendentes :';
                        this.billingPendingOk = true;
                    });
                }
            });

        this.companyDetailDashboardService
            .getBilling('REFUSED', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.billingRefusedText = 'Não há cobranças recusadas';
                } else {
                    data.items.map((billing) => {
                        this.billingRefused.push(billing.description);
                        this.billingRefusedText =
                            'Você tem cobranças recusadas :';
                        this.billingRefusedOk = true;
                    });
                }
            });

        this.companyDetailDashboardService
            .getBilling('PENDING_REVIEW', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.billingPendingReviewText =
                        'Não há cobranças em analise';
                } else {
                    data.items.map((billing) => {
                        this.billingPendingReview.push(billing.description);
                        this.billingPendingReviewOk = true;
                        this.billingPendingReviewText =
                            'Você tem cobranças em analise :';
                    });
                }
            });

        // Get Statements

        this.companyDetailDashboardService
            .getBankStatement('PENDING', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.statementsPendingText = 'Não há extratos pendentes';
                } else {
                    data.items.map((statements) => {
                        this.statementsPending.push(
                            'Banco:' +
                                ' ' +
                                statements.bankAccount.bankName +
                                ' - ' +
                                'Mês Referente:' +
                                ' ' +
                                statements.monthText
                        );
                        this.statementsPendingOk = true;
                        this.statementsPendingText =
                            'Você tem extratos pendentes :';
                    });
                }
            });

        this.companyDetailDashboardService
            .getBankStatement('PENDING_REVIEW', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.statementsPendingReviewText =
                        'Não há extratos em analise';
                } else {
                    data.items.map((statements) => {
                        this.statementsPendingReview.push(
                            'Banco:' +
                                ' ' +
                                statements.bankAccount.bankName +
                                ' - ' +
                                'Mês Referente:' +
                                ' ' +
                                statements.monthText
                        );
                        this.statementsPendingReviewOk = true;
                        this.statementsPendingReviewText =
                            'Você tem extratos em analise :';
                    });
                }
            });

        this.companyDetailDashboardService
            .getEmployee('PENDING_FIRED', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.employeePendingFiredText =
                        'Não há demissões pendentes';
                } else {
                    data.items.map((employee) => {
                        this.employeePendingFired.push(employee.name);
                        this.employeePendingFiredOk = true;
                        this.employeePendingFiredText =
                            'Você tem demissões pendentes :';
                    });
                }
            });

        this.companyDetailDashboardService
            .getNotaFiscal('PROCESSING', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.notaFiscalProcessandoText =
                        'Não há notas ficais em analise';
                } else {
                    data.items.map((nota) => {
                        this.notaFiscalProcessando.push(
                            nota.client.name +
                                ' ' +
                                'total' +
                                ' ' +
                                nota.totalAmount
                        );
                        this.notaFiscalProcessandoText =
                            'Você tem notas fiscais em analise :';
                        this.notaFiscalProcessandoOk = true;
                    });
                }
            });

        this.companyDetailDashboardService
            .getNotaFiscal('WAITING_CANCELEMENT', this.companyId)
            .subscribe((data) => {
                if (data.items.length === 0) {
                    this.notaFiscalCanceladaText =
                        'Não há notas ficais em analise';
                } else {
                    data.items.map((nota) => {
                        this.notaFiscalCancelada.push(nota.client.name);
                        this.notaFiscalCanceladaOk = true;
                        this.notaFiscalCanceladaText =
                            'Você tem notas fiscais canceladas :';
                    });
                }
            });
    }

    setBreadcrumb(user: User): void {
        this.breadcrumb.items.push(
            { label: 'Inicio', link: '/admin' },
            { label: 'Empresas', link: '/admin/empresas' },
            {
                label: user.name,
                link: `/admin/empresa/${user.id}`,
            }
        );
    }
}
