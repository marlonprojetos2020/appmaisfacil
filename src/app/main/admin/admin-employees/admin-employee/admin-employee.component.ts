import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';

@Component({
    templateUrl: 'admin-employee.component.html',
})
export class AdminEmployeeListComponent {

    serviceApi = `${environment.apiUrl}/employee/p/search?status=${this.activatedRoute.snapshot.params.filter ? this.activatedRoute.snapshot.params.filter : ''}`;
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Funcionários', link: '/admin/funcionarios' },
        ],
    };
    constructor(private activatedRoute: ActivatedRoute) {}
}
