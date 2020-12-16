import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CompaniesService } from '../../companies.service';
import { User } from '../../model/user';

@Component({
    templateUrl: './company-edit.component.html',
})
export class CompanyEditComponent implements OnInit {

    company$: Observable<User> = null;

    constructor(
        private companiesService: CompaniesService,
        private activetedRoute: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.company$ = this.companiesService.getUserCompany(this.activetedRoute.snapshot.params.id);
    }
}
