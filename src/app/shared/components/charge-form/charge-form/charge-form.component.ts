import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoModalAction,
    PoModalComponent,
    PoNotificationService,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Charge } from '../models/charge';
import { environment } from '../../../../../environments/environment';
import { ChargeFormService } from '../charge-form.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-charge-form',
    templateUrl: 'charge-form.component.html',
})
export class ChargeFormComponent implements OnInit {
    restrictions: PoUploadFileRestrictions;
    urlUploadDocument: string;
    formCharge: FormGroup;
    formNewType: FormGroup;
    serviceApi = '';
    newCharge: Charge;
    id: number;
    startDate: any = '';

    options = [];

    modalPrimaryAction: PoModalAction = {
        label: 'Cadastrar',
        action: () => this.submitNewType(),
    };

    modalSecondaryAction: PoModalAction = {
        label: 'Fechar',
        action: () => this.modalNovoTipo.close(),
    };

    @Input() editedCharge: Charge;
    @ViewChild('stepper', { static: true }) stepper;
    @ViewChild('modalNovoTipo', { static: true }) modalNovoTipo: PoModalComponent;


    constructor(
        private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private chargeFormService: ChargeFormService,
        private poNotificationService: PoNotificationService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.restrictions = {
            allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
            maxFileSize: 5242880,
            maxFiles: 1,
        };

        this.formCharge = this.formBuilder.group({
            description: [
                this.editedCharge?.description,
                Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(100),
                ]),
            ],
            type: this.formBuilder.group({
                id: [this.editedCharge?.type.id, Validators.required],
            }),
            dueDate: [this.editedCharge?.dueDate, Validators.required],
            value: [
                this.editedCharge?.value,
                Validators.compose([
                    Validators.required,
                    Validators.min(1),
                    Validators.max(9999999),
                ]),
            ],
        });

        this.formNewType = this.formBuilder.group({
            typeName: ['']
        })

        this.setTypes();

        this.id = this.activatedRoute.snapshot.params.id;

        this.startDate = new Date();
    }

    setUrlDocument(idCharge: number): void {
        this.urlUploadDocument = `${environment.apiUrl}/billing/${idCharge}/billing-file`;
        this.nextForm();
    }

    setTypes(): void {
        this.chargeFormService.getTypeCharge().subscribe((options) => {
            this.options.push(
                ...options.map((item) => ({
                    label: item.label,
                    value: item.id,
                }))
            );
        });
    }

    submitForm(): any {
        this.newCharge = this.formCharge.getRawValue() as Charge;

        this.newCharge.company = {
            id: this.id,
        };

        this.chargeFormService
            .createBilling(this.newCharge)
            .subscribe((data) => {
                this.setUrlDocument(data.id);
            });
    }

    success(): void {
        const message = 'Documento carregado com sucesso';
        this.poNotificationService.success(message);
        this.returToListing();
    }

    returToListing(): void {
        this.location.back();
    }

    dirtyMe(input): void {
        this.formCharge.get(input).markAsDirty();
    }

    nextForm(): void {
        this.stepper.next();
    }

    submitNewType(): void {
        const inputNewType = this.formNewType.get('typeName');
        let typeName = inputNewType.value;
        this.chargeFormService.createBillingType(typeName).subscribe(
            () => {
                this.setTypes();
                inputNewType.setValue('');
                this.poNotificationService.success('Novo Tipo Cadastrado');
            },
        )
        this.modalNovoTipo.close();
    }
}
