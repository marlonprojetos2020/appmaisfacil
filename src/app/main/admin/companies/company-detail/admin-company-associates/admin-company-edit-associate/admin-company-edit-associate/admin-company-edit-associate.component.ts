import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminCompanyEditAssociateService } from '../admin-company-edit-associate.service';

@Component({
    templateUrl: 'admin-company-edit-associate.component.html',
})

export class AdminCompanyEditAssociateComponent implements OnInit {

    associate$: Observable<any> = null;

    constructor(
        private activetedRoute: ActivatedRoute,
        private adminCompanyEditAssociateService: AdminCompanyEditAssociateService) {}

    ngOnInit(): void {
        const idAssociate = this.activetedRoute.snapshot.paramMap.get('idAssociate');
        const idCompany = this.activetedRoute.snapshot.paramMap.get('id');
        this.associate$ = this.adminCompanyEditAssociateService.getAssociate(idCompany, idAssociate);
    }
}
