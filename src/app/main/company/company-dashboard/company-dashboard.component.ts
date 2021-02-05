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

    // Verifica se esta tudo ok pra alterar o estilo do accordion

    billingPendingReviewOk: boolean;

    billingPendingOk: boolean;

    constructor(private companyDashboardService: CompanyDashboardService) {}

    ngOnInit(): void {
        // Get billings

        this.companyDashboardService
            .getBillingStatus('PENDING')
            .subscribe((data) =>
                data.items.map((billing) => {
                    this.billingPending.push(billing.description);
                })
            );

        this.companyDashboardService
            .getBillingStatus('REFUSED')
            .subscribe((data) =>
                data.items.map((billing) =>
                    this.billingRefused.push(billing.description)
                )
            );

        this.companyDashboardService
            .getBillingStatus('PENDING_REVIEW')
            .subscribe((data) => {
                data.items.map((billing) =>
                    this.billingPendingReview.push(billing.description)
                );
            });

        // Get Statements

        this.companyDashboardService
            .getStatementsStatus('PENDING')
            .subscribe((data) =>
                data.items.map((statements) =>
                    this.statementsPending.push(
                        'Banco:' +
                            ' ' +
                            statements.bankAccount.bankName +
                            ' - ' +
                            'Mês Referente:' +
                            ' ' +
                            statements.month
                    )
                )
            );

        this.companyDashboardService
            .getStatementsStatus('PENDING_REVIEW')
            .subscribe((data) =>
                data.items.map((statements) =>
                    this.statementsPendingReview.push(
                        'Banco:' +
                            ' ' +
                            statements.bankAccount.bankName +
                            ' - ' +
                            'Mês Referente:' +
                            ' ' +
                            statements.month
                    )
                )
            );

        this.companyDashboardService
            .getEmployessStatus('PENDING_FIRED')
            .subscribe((data) =>
                data.items.map((employee) =>
                    this.employeePendingFired.push(employee.name)
                )
            );

        this.companyDashboardService
            .getNotaFiscalStatus('PROCESSING')
            .subscribe((data) =>
                data.items.map((nota) =>
                    this.notaFiscalProcessando.push(
                        nota.client.name +
                            ' ' +
                            'total' +
                            ' ' +
                            nota.totalAmount
                    )
                )
            );

        this.companyDashboardService
            .getNotaFiscalStatus('WAITING_CANCELEMENT')
            .subscribe((data) =>
                data.items.map((nota) =>
                    this.notaFiscalCancelada.push(nota.client.name)
                )
            );
    }
}
