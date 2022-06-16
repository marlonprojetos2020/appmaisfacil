import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyBankStatementService } from '../../company-bank-statement.service';
import { environment } from '../../../../../../environments/environment';
import {
    PoBreadcrumb,
    PoNotificationService,
    PoSelectOption,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';
import { Location } from '@angular/common';
import { PageDatatableComponent } from '../../../../../shared/components/page-datatable/page-datatable/page-datatable.component';

@Component({
    templateUrl: 'company-new-bank-statement.component.html',
})
export class CompanyNewBankStatementComponent implements OnInit {
    @ViewChild(PageDatatableComponent)
    dataTableComponent: PageDatatableComponent;

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Meus Extratos', link: '/empresa/extrato' },
            { label: 'Novo Extrato', link: '' },
        ],
    };

    formNewStatement: FormGroup;

    urlUploadDocument: string;

    @ViewChild('stepper', { static: true }) stepper;

    options: PoSelectOption[] = [];

    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
        maxFileSize: 5242880,
        maxFiles: 1,
    };

    constructor(
        private formBuilder: FormBuilder,
        private companyBankStatementService: CompanyBankStatementService,
        private poNotificationService: PoNotificationService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.formNewStatement = this.formBuilder.group({
            id: ['', Validators.required],
        });

        const company = JSON.parse(sessionStorage.CREDENTIALS_KEY);

        this.companyBankStatementService
            .getBankName(company.userDetails.id)
            .subscribe((options) => {
                this.options.push(
                    ...options.map((item) => ({
                        label:
                            'Banco' +
                            item.bankName +
                            ' - ' +
                            'Agencia' +
                            item.agency +
                            ' - ' +
                            'Conta' +
                            item.accountNumber,
                        value: item.id,
                    }))
                );
            });
    }

    submitForm(): any {
        const idBankAccount = this.formNewStatement.getRawValue();
        this.setUrlDocument(idBankAccount.id);
    }

    nextForm(): void {
        this.stepper.next();
    }

    setUrlDocument(idStatement: number): void {
        this.urlUploadDocument = `${environment.apiUrl}/company/statement/bank-account/${idStatement}`;
        this.nextForm();
    }

    success(): void {
        const message = 'Documento carregado com sucesso';
        this.poNotificationService.success(message);
        this.location.back();
    }
}
