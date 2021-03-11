import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';

@Component({
    templateUrl: './admin-bank-statement-list.component.html',
})
export class AdminBankStatementListComponent {

    serviceApi = `${environment.apiUrl}/statement/p/search?status=${this.activatedRoute.snapshot.params.filter ? this.activatedRoute.snapshot.params.filter : ''}`;
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Extratos', link: 'admin/extratos' },
        ],
    };
    constructor(private activatedRoute: ActivatedRoute) {}

}

