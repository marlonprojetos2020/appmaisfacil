import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../../../environments/environment';
import { PoUploadFileRestrictions } from '@po-ui/ng-components';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: 'admin-company-new-charge.component.html',
    styleUrls: ['admin-company-new-charge.component.scss'],
})
export class AdminCompanyNewChargeComponent implements OnInit {
    restrictions: PoUploadFileRestrictions;
    urlUploadDocument: string;
    formCharge: FormGroup;
    serviceApi = '';

    options = [];

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.restrictions = {
            allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg'],
            maxFileSize: 5242880,
            maxFiles: 1,
        };

        this.urlUploadDocument = `${environment.apiUrl}/`;

        this.formCharge = this.formBuilder.group({
            description: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(100),
                ]),
            ],
            type: ['', Validators.required],
            dueDate: ['', Validators.required],
            value: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.min(1),
                    Validators.max(9999999),
                ]),
            ],
        });

        this.options = [
            ...this.options,
            {
                value: '1',
                label: `Tipo Exemplo`,
            },
        ];
    }

    subscribeForm(): any {
        console.log(this.formCharge.value);
    }
}
