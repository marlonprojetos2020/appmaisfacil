import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../../../environments/environment';
import { PoUploadFileRestrictions } from '@po-ui/ng-components';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    templateUrl: 'admin-company-new-charge.component.html',
    styleUrls: ['admin-company-new-charge.component.scss'],
})
export class AdminCompanyNewChargeComponent implements OnInit {
    restrictions: PoUploadFileRestrictions;
    urlUploadDocument: string;
    formCharge: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.restrictions = {
            allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg'],
            maxFileSize: 5242880,
            maxFiles: 4,
        };

        this.urlUploadDocument = `${environment.apiUrl}/`;

        this.formCharge = this.formBuilder.group({});
    }
}
