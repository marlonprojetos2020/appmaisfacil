import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CompanyEmployee } from '../../../../main/company/company-employees/models/company-employee';
import {
    PoNotificationService,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';
import { Location } from '@angular/common';
import { finalize } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { EmployeeFormService } from '../employee-form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'employee-form.component.html',
    selector: 'app-employee-form',
})
export class EmployeeFormComponent implements OnInit {
    formCompanyEmployee: FormGroup;
    newCompanyEmployee: CompanyEmployee;
    restrictions: PoUploadFileRestrictions;
    idEmployee: number;
    loading = false;
    canActivated = false;
    isHideLoading = true;

    urlUploadDocument: string;

    @Input() editedEmployee?: CompanyEmployee;

    @ViewChild('stepper', { static: true }) stepper;

    constructor(
        private formBuilder: FormBuilder,
        private employeeService: EmployeeFormService,
        private activatedRoute: ActivatedRoute,
        private poNotificationService: PoNotificationService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.idEmployee = this.activatedRoute.snapshot.params.id;

        this.formCompanyEmployee = this.formBuilder.group({
            name: [
                this.editedEmployee?.name,
                Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(100),
                ]),
            ],
            admissionAt: [
                this.editedEmployee?.admissionAt,
                Validators.required,
            ],
            category: [
                this.editedEmployee?.category,
                Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(100),
                ]),
            ],
        });

        this.restrictions = {
            allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
            maxFileSize: 5242880,
            maxFiles: 1,
        };
    }

    submitForm(): any {
        this.loading = true;

        this.newCompanyEmployee = this.formCompanyEmployee.getRawValue() as CompanyEmployee;

        this.editedEmployee
            ? this.employeeService
                .updateEmployee(this.idEmployee, this.newCompanyEmployee)
                .pipe(finalize(() => (this.loading = false)))
                .subscribe((data) => {
                    this.setUrlDocument(data.id);
                })
            : this.employeeService
                .createCompanyEmployee(this.newCompanyEmployee)
                .pipe(finalize(() => (this.loading = false)))
                .subscribe((data) => {
                    this.setUrlDocument(data.id);
                });
    }

    nextForm(): void {
        this.stepper.next();
    }

    setUrlDocument(idEmployee: number): void {
        this.urlUploadDocument = `${environment.apiUrl}/company/employee/${idEmployee}/admission-file`;
        this.nextForm();
    }

    onLoad(): void {
        this.isHideLoading = false;
    }

    success(): void {
        this.isHideLoading = true;
        this.editedEmployee
            ? this.poNotificationService.success(
                'Documento editado com sucesso'
            )
            : this.poNotificationService.success(
                'Documento carregado com sucesso'
            );

        this.location.back();
    }

    canActiveNextStep(form: NgForm): any {
        return form.valid;
    }

    dirtyMe(input): void {
        this.formCompanyEmployee.get(input).markAsDirty();
    }
}
