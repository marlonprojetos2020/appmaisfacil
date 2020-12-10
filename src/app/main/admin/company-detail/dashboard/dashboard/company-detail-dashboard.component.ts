import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CompanyDetailService } from '../../company-detail.service';
import { User } from '../../model/user';

@Component({
    templateUrl: './company-detail-dashboard.component.html',
    styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailDashboardComponent implements OnInit {
    title = '';
    company$: Observable<User> = null;

    constructor(
        private activetedRoute: ActivatedRoute,
        private companyDetailService: CompanyDetailService
    ) {}

    ngOnInit(): void {
        this.company$ = this.companyDetailService.getUserCompany(
            this.activetedRoute.snapshot.params.id
        );
    }
}
