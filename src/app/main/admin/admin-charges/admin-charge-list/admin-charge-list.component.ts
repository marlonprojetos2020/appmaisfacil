import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';
import { ChargeListComponent } from '../../shared/charge-list/charge-list/charge-list.component';

@Component({
    templateUrl: './admin-charge-list.component.html',
})

export class AdminChargeListComponent {
    serviceApi = `${environment.apiUrl}/billing/p/search?status=${this.activatedRoute.snapshot.params.filter ? this.activatedRoute.snapshot.params.filter : ''}`;
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Cobranças', link: '/admin/cobrancas' },
        ],
    };

    constructor(private activatedRoute: ActivatedRoute) {}
}
