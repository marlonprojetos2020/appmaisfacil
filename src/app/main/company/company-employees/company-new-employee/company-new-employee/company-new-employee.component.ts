import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
    templateUrl: 'company-new-employee.component.html',
    styleUrls: ['company-new-employee.component.scss'],
})
export class CompanyNewEmployeeComponent implements OnInit {
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Funcionários', link: '/empresa/funcionarios' },
            {
                label: 'Novo Funcionário',
                link: '/empresa/funcionarios/cadastro',
            },
        ],
    };

    constructor() {}

    ngOnInit(): void {}
}
