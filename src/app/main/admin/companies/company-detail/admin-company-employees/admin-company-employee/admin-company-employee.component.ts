import {Component, OnInit} from '@angular/core';
import {PoPageAction} from '@po-ui/ng-components';
import {ActivatedRoute} from '@angular/router';
import {CompaniesService} from '../../../companies.service';
import {Observable} from 'rxjs';
import {User} from '../../../model/user';

@Component({
    templateUrl: './admin-company-employee.component.html',
})
export class AdminCompanyEmployeeComponent implements OnInit {
    company$: Observable<User> = null;


    actions: Array<PoPageAction> = [
        {
            label: '+ Funcionário',
            url: `/admin/empresa/${this.activetedRoute.snapshot.params.id}/funcionarios/cadastro`,
        },
    ];


    constructor(
        private activetedRoute: ActivatedRoute,
        private companyDetailService: CompaniesService,
    ) {}

    ngOnInit(): void {
        this.company$ = this.companyDetailService.getUserCompany(
            this.activetedRoute.snapshot.params.id,
        );
    }



}
