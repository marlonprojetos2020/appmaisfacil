import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { CompanyEmployeeService } from '../../company-employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'company-edit-employee.component.html',
})
export class CompanyEditEmployeeComponent implements OnInit {
    employee$: Observable<any> = null;

    breadcrumb: PoBreadcrumb;

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
