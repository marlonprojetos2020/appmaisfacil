import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { PoNotificationService, PoUploadFileRestrictions } from '@po-ui/ng-components';
import { environment } from 'src/environments/environment';
import { Associate } from '../models/associate';
import { AssociateFormService } from '../associate-form.service';
import { Observable } from 'rxjs';

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

    @Input() editedAssociate?: Associate;
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
            name: [this.editedAssociate?.name, Validators.required],
            rg: [this.editedAssociate?.rg, Validators.required],
            cpf: [this.editedAssociate?.cpf, Validators.required],
            voterTitle: [this.editedAssociate?.voterTitle, Validators.required],
            percentageInSociety: [this.editedAssociate?.percentageInSociety, Validators.required],
        });
    }

    submitForm(): void {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.formAssociate.value.percentageInSociety = parseInt(this.formAssociate.value.percentageInSociety, 10);
        this.newAssociate = this.formAssociate.getRawValue() as Associate;
        this.newAssociate.rg = this.newAssociate.rg
            .toUpperCase()
            .replace(/[^\dX]/g, '')
            .trim();

        // se estiver recebendo um associado editado faz o uso de update, senão cria um novo;
        (this.editedAssociate ?
            this.associateFormService.updateAssociate(this.newAssociate, id, this.editedAssociate.id)
            :
            this.associateFormService.createAssociate(this.newAssociate, id)
        ).subscribe(data => this.setRequestsUrl(data.id, id));
    }

    setRequestsUrl(idAssociate: number, id: string): void {
        const baseString = `${environment.apiUrl}/users/${id}/company-partners/${idAssociate}`;
        this.urlUploadRG = `${baseString}/rg-file`;
        this.urlUploadCPF = `${baseString}/cpf-file`;
        this.urlUploadVoterTitle = `${baseString}/voter-title-file`;
        this.urlUploadProofOfAddress = `${baseString}/proof-of-address-file`;
        this.nextForm();
    }

    success(result: HttpResponse<any>, last = false): void {
        const message = this.editedAssociate ? 'Documento editado com sucesso' : 'Documento carregado com sucesso';
        this.poNotificationService.success(message);
        last ? this.location.back() : this.nextForm();
    }

    nextForm(): void {
        this.stepper.next();
    }

    dirtyMe(input): void {
        this.formAssociate.get(input).markAsDirty();
    }
}
