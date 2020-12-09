import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailService } from '../../company-detail.service';

@Component({
    templateUrl: './company-detail-dashboard.component.html'
})
export class CompanyDetailDashboardComponent implements OnInit {

    title = '';
    // company:

    constructor(
        private activetedRoute: ActivatedRoute,
        private companyDetailService: CompanyDetailService,
    ) {}

    ngOnInit(): void {
        this.companyDetailService.getUserCompany(this.activetedRoute.snapshot.params.id).subscribe(
            data => console.log(data),
        );
    }
}
