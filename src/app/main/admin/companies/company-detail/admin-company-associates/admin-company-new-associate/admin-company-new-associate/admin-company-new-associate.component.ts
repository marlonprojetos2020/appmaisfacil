import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Associate } from '../../associate';
import { PoNotificationService, PoUploadFileRestrictions } from '@po-ui/ng-components';
import { environment } from '../../../../../../../../environments/environment';
import { AdminCompanyAssociateService } from '../../admin-company-associate.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    templateUrl: 'admin-company-new-associate.component.html',
    styleUrls: ['admin-company-new-associate.component.scss'],
})
export class AdminCompanyNewAssociateComponent implements OnInit {
    formAssociate: FormGroup;
    newAssociate: Associate;
    restrictions: PoUploadFileRestrictions;
    urlUploadDocument: string;

    constructor(
        private formBuilder: FormBuilder,
        private associateService: AdminCompanyAssociateService,
        private activatedRoute: ActivatedRoute,
        private location: Location,

    ) {}

    ngOnInit(): void {
        this.formAssociate = this.formBuilder.group({
            name: ['', Validators.required],
            rg: ['', Validators.required],
            cpf: ['', Validators.required],
            voterTitle: ['', Validators.required],
            percentageInSociety: ['', Validators.required],
        });

        this.restrictions = {
            allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg'],
            maxFileSize: 5242880,
            maxFiles: 4,
        };

        this.urlUploadDocument = `${environment.apiUrl}/`;

        parseInt(this.formAssociate.value.percentageInSociety, 10);
    }

    submitForm(): any {
        this.formAssociate.value.percentageInSociety = parseInt(
            this.formAssociate.value.percentageInSociety,
            10,
        );
        this.newAssociate = this.formAssociate.getRawValue() as Associate;
        this.newAssociate.rg = this.newAssociate.rg
            .toUpperCase()
            .replace(/[^\dX]/g, '')
            .trim();
        this.associateService
            .createAssociate(this.newAssociate, this.activatedRoute.snapshot.paramMap.get('id'))
            .subscribe(() => this.location.back());
    }
}
