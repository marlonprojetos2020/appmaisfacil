import { Component } from '@angular/core';
import { PoPageAction } from '@po-ui/ng-components';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'admin-company-new-charge.component.html',
    styleUrls: ['admin-company-new-charge.component.scss'],
})
export class AdminCompanyNewChargeComponent {
    actions: Array<PoPageAction> = [
        {
            label: 'Voltar',
            url: `admin/empresa/${this.activatedRoute.snapshot.params.id}/cobrancas`,
        },
    ];

    constructor(private activatedRoute: ActivatedRoute) {}
}
