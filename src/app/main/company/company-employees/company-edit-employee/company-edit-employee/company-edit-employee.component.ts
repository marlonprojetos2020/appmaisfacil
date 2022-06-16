import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { CompanyEmployeeService } from '../../company-employee.service';
import { ActivatedRoute } from '@angular/router';
import { CompanyEmployee } from '../../models/company-employee';

@Component({
    templateUrl: 'company-edit-employee.component.html',
})
export class CompanyEditEmployeeComponent implements OnInit {
    employee$: Observable<any> = null;

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Funcionários', link: '/empresa/funcionarios' },
            {
                label: 'Editar Funcionário',
                link: '',
            },
        ],
    };

    constructor(
        private companyEmployeeService: CompanyEmployeeService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const idEmployee = this.activatedRoute.snapshot.params.id;

        this.employee$ = this.companyEmployeeService.getCompanyEmployee(
            idEmployee
        );
    }
}
