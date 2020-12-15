import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoPageAction } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { CompaniesService } from '../../../companies.service';
import { User } from '../../../model/user';

@Component({
    templateUrl: './company-detail-dashboard.component.html',
    styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailDashboardComponent implements OnInit {
    title = '';
    company$: Observable<User> = null;

    public readonly actions: Array<PoPageAction> = [
        {
            label: 'Editar Empresa', url: `admin/empresa/${this.activetedRoute.snapshot.params.id}/editar`,
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
