import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { PoNotificationService, PoUploadFileRestrictions } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';
import { Associate } from '../models/associate';
import { AssociateFormService } from '../associate-form.service';

@Component({
    selector: 'app-associate-form',
    templateUrl: './associate-form.component.html',
})

export class AssociateFormComponent implements OnInit {

    formAssociate: FormGroup;
    newAssociate: Associate;
    urlUploadRG: string;
    urlUploadCPF: string;
    urlUploadVoterTitle: string;
    urlUploadProofOfAddress: string;

    // @Input();
    @ViewChild('stepper', { static: true }) stepper;

    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
        maxFileSize: 5242880,
        maxFiles: 1,
    };



    constructor(
        private formBuilder: FormBuilder,
        private associateFormService: AssociateFormService,
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
        this.associateFormService
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
};