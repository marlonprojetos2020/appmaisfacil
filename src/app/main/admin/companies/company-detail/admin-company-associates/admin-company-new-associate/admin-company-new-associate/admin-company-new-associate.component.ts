import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Associate } from '../../associate';
import { PoNotificationService, PoUploadFileRestrictions, PoUploadLiterals } from '@po-ui/ng-components';
import { environment } from '../../../../../../../../environments/environment';
import { AdminCompanyAssociateService } from '../../admin-company-associate.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';

@Component({
    templateUrl: 'admin-company-new-associate.component.html',
    styleUrls: ['admin-company-new-associate.component.scss'],
})
export class AdminCompanyNewAssociateComponent implements OnInit {
    formAssociate: FormGroup;
    newAssociate: Associate;
    restrictions: PoUploadFileRestrictions;
    urlUploadRG: string;
    urlUploadCPF: string;
    urlUploadVoterTitle: string;
    urlUploadProofOfAddress: string;
    delete: () => void;


    @Input() editAssociate: Associate;
    @ViewChild('stepper', { static: true }) stepper;


    constructor(
        private formBuilder: FormBuilder,
        private associateService: AdminCompanyAssociateService,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private poNotificationService: PoNotificationService,
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
            allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
            maxFileSize: 5242880,
            maxFiles: 1,
        };


        parseInt(this.formAssociate.value.percentageInSociety, 10);
    }

    nextForm(): void {
        this.stepper.next();
    }

    submitForm(): any {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.formAssociate.value.percentageInSociety = parseInt(this.formAssociate.value.percentageInSociety, 10);
        this.newAssociate = this.formAssociate.getRawValue() as Associate;
        this.newAssociate.rg = this.newAssociate.rg
            .toUpperCase()
            .replace(/[^\dX]/g, '')
            .trim();
        this.associateService
            .createAssociate(this.newAssociate, id)
            .subscribe(data => {
                this.urlUploadRG = `${environment.apiUrl}/users/${id}/company-partners/${data.id}/rg-file`;
                this.urlUploadCPF = `${environment.apiUrl}/users/${id}/company-partners/${data.id}/cpf-file`;
                this.urlUploadVoterTitle = `${environment.apiUrl}/users/${id}/company-partners/${data.id}/voter-title-file`;
                this.urlUploadProofOfAddress = `${environment.apiUrl}/users/${id}/company-partners/${data.id}/proof-of-address-file`;
                this.nextForm();
            });
    }

    success(result: HttpResponse<any>, last = false): void {
        this.poNotificationService.success(`Documento carregado com sucesso`);
        last ? this.location.back() : this.nextForm();
    }

    dirtyMe(input): void {
        this.formAssociate.get(input).markAsDirty();
    }
}