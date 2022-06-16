import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';

@Component({
    templateUrl: './admin-invoices-list.component.html',
})
export class AdminInvoiceListComponent {
    serviceApi = `${environment.apiUrl}/nota-fiscal/p/search?status=${this.activatedRoute.snapshot.params.filter ? this.activatedRoute.snapshot.params.filter : ''}`;
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Nota Fiscal', link: '/admin/nota-fiscal' },
        ],
    };
    constructor(private activatedRoute: ActivatedRoute) {}
}
