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

    items: [];

    // Verifica se esta tudo ok pra alterar o estilo do accordion

    billingPendingReviewOk: boolean;

    billingPendingOk: boolean;

    constructor(private companyDashboardService: CompanyDashboardService) {}

    ngOnInit(): void {
        // Get billings

        this.companyDashboardService.getBillingPending().subscribe((data) =>
            data.items.map((billing) => {
                this.billingPending.push(billing.description);
            })
        );

        this.companyDashboardService
            .getBillingRefused()
            .subscribe((data) =>
                data.items.map((billing) =>
                    this.billingRefused.push(billing.description)
                )
            );

        this.companyDashboardService
            .getBillingPendingReview()
            .subscribe((data) => {
                data.items.map((billing) =>
                    this.billingPendingReview.push(billing.description)
                );
            });

        // Get Statements

        this.companyDashboardService
            .getStatementsPending()
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
            .getBillingPendingReview()
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
    }
}
