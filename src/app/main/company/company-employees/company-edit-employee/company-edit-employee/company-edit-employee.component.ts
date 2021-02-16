import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoUploadFileRestrictions } from '@po-ui/ng-components';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: 'company-edit-employee.component.html',
})
export class CompanyEditEmployeeComponent implements OnInit {
    breadcrumb: PoBreadcrumb;

    formEmployeeEdit: FormGroup;

    urlUploadDocument = '';

    loading = false;

    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
        maxFileSize: 5242880,
        maxFiles: 1,
    };

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.formEmployeeEdit = this.formBuilder.group({
            name: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(100),
                ]),
            ],
            admissionAt: ['', Validators.required],
            category: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(100),
                ]),
            ],
        });
    }

    submitForm(): void {}

    dirtyMe(input): void {
        this.formEmployeeEdit.get(input).markAsDirty();
    }

    success(): void {}
}
