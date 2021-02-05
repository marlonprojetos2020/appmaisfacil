import { Component, OnInit } from '@angular/core';
import { CompanyDashboardService } from './company-dashboard.service';

@Component({
    templateUrl: './company-dashboard.component.html',
})
export class CompanyDashboardComponent implements OnInit {
    helpText = `Painel utilizado para transmitir todas as informações de contabilidade da sua empresa`;

    billingPending = '';

    items: [];

    constructor(private companyDashboardService: CompanyDashboardService) {}

    ngOnInit(): void {
        this.companyDashboardService
            .getBillingPending()
            .subscribe((data) =>
                data.items.map(
                    (billing) => (this.billingPending = billing.description)
                )
            );
    }
}
