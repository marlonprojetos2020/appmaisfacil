import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../../../environments/environment';
import { PoUploadFileRestrictions } from '@po-ui/ng-components';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Charge } from '../../models/charge';
import { ActivatedRoute } from '@angular/router';
import { AdminCompanyChargeService } from '../../admin-company-charge.service';

@Component({
    templateUrl: 'admin-company-new-charge.component.html',
    styleUrls: ['admin-company-new-charge.component.scss'],
})
export class AdminCompanyNewChargeComponent implements OnInit {
    restrictions: PoUploadFileRestrictions;
    urlUploadDocument: string;
    formCharge: FormGroup;
    serviceApi = '';
    newCharge: Charge;
    id: number;

    options = [];

    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private adminCompanyChargeService: AdminCompanyChargeService
    ) {}

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
            type: this.formBuilder.group({
                id: ['', Validators.required],
            }),
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
        this.adminCompanyChargeService.getTypeCharge().subscribe((options) => {
            this.options.push(
                ...options.map((item) => {
                    return {
                        label: item.label,
                        value: item.id,
                    };
                })
            );
            console.log(this.options);
        });

        this.id = this.activatedRoute.snapshot.params.id;
    }

    subscribeForm(): any {
        this.newCharge = this.formCharge.getRawValue() as Charge;

        this.newCharge.company = {
            id: this.id,
        };
        console.log(this.newCharge);
    }
}
