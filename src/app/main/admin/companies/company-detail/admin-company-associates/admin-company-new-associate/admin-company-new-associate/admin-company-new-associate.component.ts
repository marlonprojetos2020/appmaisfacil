import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Associate } from '../../../../model/associate';
import { PoUploadFileRestrictions } from '@po-ui/ng-components';
import { environment } from '../../../../../../../../environments/environment';

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

    constructor(private formBuilder: FormBuilder) {}

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
    }

    submitForm(): void {
        return console.log(this.formAssociate.value);
    }
}
