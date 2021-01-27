import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyBankStatementService } from '../../company-bank-statement.service';
import { environment } from '../../../../../../environments/environment';
import { PoNotificationService } from '@po-ui/ng-components';
import { Location } from '@angular/common';
import { BankStatement } from '../../models/bank-statements';

@Component({
    templateUrl: 'company-new-bank-statement.component.html',
})
export class CompanyNewBankStatementComponent implements OnInit {
    formNewStatement: FormGroup;

    newFormStatement: BankStatement;

    urlUploadDocument: string;

    @ViewChild('stepper', { static: true }) stepper;

    options = [];

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
            .subscribe((options) =>
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
                )
            );
    }

    submitForm(): any {
        this.nextForm();

        this.newFormStatement = this.formNewStatement.getRawValue() as BankStatement;

        console.log(this.newFormStatement);

        this.setUrlDocument(this.newFormStatement.id);
    }

    nextForm(): void {
        this.stepper.next();
    }

    setUrlDocument(idStatement: number): void {
        this.urlUploadDocument = `${environment.apiUrl}/company/statement/${idStatement}`;
        this.nextForm();
    }

    success(): void {
        const message = 'Documento carregado com sucesso';
        this.poNotificationService.success(message);
        this.location.back();
    }
}
