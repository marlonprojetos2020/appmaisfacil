import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../admin-dashboard.service';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
    quantityPendente;
    extratoPendente;
    extratoAnalise;
    cobrancaAnalise;
    funcionarioDemissao;
    notaFiscalAnalise;
    notaFiscalCancelamento;
    totalUsers;

    breadcrumb: PoBreadcrumb = {
        items: [{ label: 'Início' }],
    };

    constructor(private adminDashbobardService: AdminDashboardService) {}

    ngOnInit(): void {
        this.adminDashbobardService
            .getQuantityServiceDashboard()
            .subscribe((data) => {
                this.cobrancaAnalise = data.countPendingReviewBillings;
                this.funcionarioDemissao = data.countPendingFiredEmployees;
                this.notaFiscalAnalise = data.countProcessingNotaFiscal;
                this.notaFiscalCancelamento =
                    data.countWaitingCancelementNotaFiscal;
                this.extratoPendente = data.countPendingStatements;
                this.extratoAnalise = data.countPendingReviewsStatements;
                this.totalUsers = data.countUsers;
            });
    }
}
