import { Component, OnInit } from '@angular/core';
import { CompanyDashboardService } from './company-dashboard.service';

@Component({
    templateUrl: './company-dashboard.component.html',
})
export class CompanyDashboardComponent implements OnInit {
    helpText = `Painel utilizado para transmitir todas as informações de contabilidade da sua empresa`;

    isPending = true;

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

    constructor(private companyDashboardService: CompanyDashboardService) {}

    ngOnInit(): void {
        // Get billings

        this.companyDashboardService
            .getBillingStatus('PENDING')
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

        this.companyDashboardService
            .getBillingStatus('REFUSED')
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

        this.companyDashboardService
            .getBillingStatus('PENDING_REVIEW')
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

        this.companyDashboardService
            .getStatementsStatus('PENDING')
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
                                statements.month
                        );
                        this.statementsPendingOk = true;
                        this.statementsPendingText =
                            'Você tem extratos pendentes :';
                    });
                }
            });

        this.companyDashboardService
            .getStatementsStatus('PENDING_REVIEW')
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
                                statements.month
                        );
                        this.statementsPendingReviewOk = true;
                        this.statementsPendingReviewText =
                            'Você tem extratos em analise :';
                    });
                }
            });

        this.companyDashboardService
            .getEmployessStatus('PENDING_FIRED')
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

        this.companyDashboardService
            .getNotaFiscalStatus('PROCESSING')
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

        this.companyDashboardService
            .getNotaFiscalStatus('WAITING_CANCELEMENT')
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
}
