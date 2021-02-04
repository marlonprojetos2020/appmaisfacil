import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyEmployee } from '../../models/company-employee';
import { CompanyEmployeeService } from '../../company-employee.service';
import { environment } from '../../../../../../environments/environment';
import {
    PoBreadcrumb,
    PoNotificationService,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';
import { Location } from '@angular/common';
import { finalize } from 'rxjs/operators';

@Component({
    templateUrl: 'company-new-employee.component.html',
    styleUrls: ['company-new-employee.component.scss'],
})
export class CompanyNewEmployeeComponent implements OnInit {
    formCompanyEmployee: FormGroup;
    newCompanyEmployee: CompanyEmployee;
    startDate: any = '';
    restrictions: PoUploadFileRestrictions;

    loading = false;

    urlUploadDocument: string;

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Funcionários', link: '/empresa/funcionarios' },
            {
                label: 'Novo Funcionário',
                link: '/empresa/funcionarios/cadastro',
            },
        ],
    };

    @ViewChild('stepper', { static: true }) stepper;

    constructor(
        private formBuilder: FormBuilder,
        private companyEmployeeService: CompanyEmployeeService,
        private poNotificationService: PoNotificationService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.formCompanyEmployee = this.formBuilder.group({
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

        this.startDate = new Date();

        this.restrictions = {
            allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
            maxFileSize: 5242880,
            maxFiles: 1,
        };
    }

    submitForm(): any {
        this.loading = true;

        this.newCompanyEmployee = this.formCompanyEmployee.getRawValue() as CompanyEmployee;

        this.companyEmployeeService
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

    success(): void {
        const message = 'Documento carregado com sucesso';
        this.poNotificationService.success(message);
        this.location.back();
    }

    dirtyMe(input): void {
        this.formCompanyEmployee.get(input).markAsDirty();
    }
}
