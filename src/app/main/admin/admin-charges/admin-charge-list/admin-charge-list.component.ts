import { Component } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';

@Component({
    templateUrl: './admin-charge-list.component.html',
})

export class AdminChargeListComponent {
    serviceApi = `${environment.apiUrl}/billing/p/search?status=PENDING_REVIEW`;
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Cobranças', link: '/admin/cobrancas' },
        ],
    };
}
