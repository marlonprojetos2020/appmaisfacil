import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Associate } from '../../models/associate';
import { PoUploadFileRestrictions } from '@po-ui/ng-components';
import { environment } from '../../../../../../../../environments/environment';
import { AdminCompanyAssociateService } from '../../admin-company-associate.service';
import { ActivatedRoute, Router } from '@angular/router';

// @ts-ignore
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
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.formAssociate = this.formBuilder.group({
            name: ['', Validators.required],
            RG: ['', Validators.required],
            CPF: ['', Validators.required],
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
            10
        );

        this.formAssociate.value.RG = this.formAssociate.value.RG.replace(
            '.',
            ''
        )
            .replace('.', '')
            .replace('-', '')
            .trim();

        this.associateService
            .createAssociate(
                this.newAssociate,
                this.activatedRoute.snapshot.paramMap.get('id')
            )
            .subscribe();
    }
}
