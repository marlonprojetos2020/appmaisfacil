import { Component, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoNotificationService,
    PoTableAction,
} from '@po-ui/ng-components';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DatatableColumn } from '../../../../../shared/components/page-datatable/datatable-column';
import { Invoice } from '../models/invoice';
import { CompanyNewInvoiceService } from '../company-new-invoice.service';
import { Product } from '../models/product';
import { finalize } from 'rxjs/operators';

@Component({
    templateUrl: 'company-new-invoice.component.html',
    styleUrls: ['./company-new-invoice.component.scss'],
})

export class CompanyNewInvoiceComponent implements OnInit {

    newInvoice: Invoice = {} as Invoice;
    total = 0;
    podeSelecionar = true;
    cliente = [];
    formProduct: FormGroup;
    idClient: number;
    disabledButtonSubmitInvoice = true;
    loading = false;

    @ViewChild('modalProduct', { static: true })
    poModalProduto: PoModalComponent;

    @ViewChild('stepper', { static: true }) stepper;

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Nota Fiscal', link: '/empresa/nota-fiscal' },
            { label: 'Emitir Nota', link: '' },
        ],
    };

    // CONFIG STEP 1
    itemsStepOne: Array<any> = [];

    columnsStepOne: DatatableColumn[] = [
        {
            label: 'Nome',
            property: 'name',
        },
        {
            label: 'Documento',
            property: 'document',
        },
    ];

    actionStepOne: PoTableAction[] = [
        {
            label: 'Selecionar',
            action: (item) => {
                this.nextForm();
                this.itemsStepThree.push({
                    name: item.name,
                    document: item.document,
                });
                this.idClient = item.id;
                this.podeSelecionar = false;
                this.chageToStep2 = true;
            },
            disabled: () => !this.podeSelecionar,
        },
        {
            label: 'Editar',
            action: (item) => {
                const id = item.id;
                this.router.navigateByUrl(
                    `/empresa/nota-fiscal/emitir-nota/editar-cliente/${id}`
                );
            },
        },
    ];

    chageToStep2 = false;


    // CONFIG STEP 2
    itemsStepTwo: Array<any> = [];

    columnsStepTwo: DatatableColumn[] = [
        {
            label: 'Produto',
            property: 'title',
        },
        {
            label: 'Quantidade',
            property: 'quantity',
        },
        {
            label: 'Valor unitário',
            property: 'amount',
            type: 'currency',
            format: 'BRL',
        },
        {
            label: 'Total',
            property: 'total',
            type: 'currency',
            format: 'BRL',
        },
    ];

    actionsStepTwo: PoTableAction[] = [
        {
            label: 'Deletar',
            action: (item) => {
                this.itemsStepTwo = this.itemsStepTwo.filter(
                    (product) => product !== item
                );

                this.atuzalizaTotal();

                if (this.itemsStepTwo.length === 0) {
                    return (
                        (this.disabledStepTwo = true),
                        (this.disabledButtonSubmitInvoice = true)
                    );
                } else {
                    return (
                        (this.disabledStepTwo = false),
                        (this.disabledButtonSubmitInvoice = false)
                    );
                }
            },
        },
    ];

    disabledStepTwo = true;


    // CONFIG STEP 3
    columnsStepThree: DatatableColumn[] = [
        {
            label: 'Nome',
            property: 'name',
        },
        {
            label: 'Documento',
            property: 'document',
        },
    ];

    itemsStepThree: Array<any> = [];

    // ACAO PRIMARIA MODAL
    primaryAction: PoModalAction = {
        label: 'Salvar',
        action: () => this.processProduct(),
    };

    constructor(
        private formBuilder: FormBuilder,
        private companyNewInvoiceService: CompanyNewInvoiceService,
        private router: Router,
        private poNotificationService: PoNotificationService
    ) {}

    ngOnInit(): void {
        this.formProduct = this.formBuilder.group({
            title: ['', Validators.required],
            amount: ['', Validators.required],
            quantity: ['', Validators.required],
            total: ['', Validators.required],
        });

        this.companyNewInvoiceService.getClientList().subscribe((data) => {
            data.items.map((items) =>
                this.itemsStepOne.push({
                    name: items.name,
                    document: items.document,
                    id: items.id,
                })
            );
        });

        this.formProduct
            .get('amount')
            .valueChanges.subscribe(() => this.totalCalc());

        this.formProduct
            .get('quantity')
            .valueChanges.subscribe(() => this.totalCalc());
    }

    newClient(): void {
        this.router.navigateByUrl(
            '/empresa/nota-fiscal/emitir-nota/novo-cliente'
        );
    }

    prepareModal(): void {
        this.formProduct = this.formBuilder.group({
            title: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(4),
                ]),
            ],
            amount: ['', Validators.required],
            quantity: ['', Validators.required],
            total: ['', Validators.required],
        });

        this.formProduct
            .get('amount')
            .valueChanges.subscribe(() => this.totalCalc());

        this.formProduct
            .get('quantity')
            .valueChanges.subscribe(() => this.totalCalc());

        this.poModalProduto.open();
    }

    submitForm(): void {
        const itemsProdct: Product = this.formProduct.getRawValue() as Product;

        this.itemsStepTwo.push(itemsProdct);
        this.poModalProduto.close();
        this.atuzalizaTotal();

        this.disabledStepTwo = false;
        this.disabledButtonSubmitInvoice = false;
    }

    nextForm(): void {
        this.stepper.next();
    }

    submitInvoice(): void {
        this.loading = true;

        this.newInvoice.items = this.itemsStepTwo;

        this.newInvoice.client = { id: this.idClient };

        this.companyNewInvoiceService
            .createInvoice(this.newInvoice)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe();

        this.router.navigateByUrl('/empresa/nota-fiscal');
    }

    private totalCalc(): void {
        const amount = this.formProduct.get('amount').value;
        const quantity = this.formProduct.get('quantity').value;
        if (amount && quantity) {
            this.formProduct.get('total').setValue(`${amount * quantity}`);
        } else {
            this.formProduct.get('total').setValue('');
        }
    }

    private atuzalizaTotal(): void {
        this.total = this.itemsStepTwo.reduce((total: number, elem) => {
            return total + parseInt(elem.total, 10);
        }, 0);
    }

    dirtyMe(input): void {
        this.formProduct.get(input).markAsDirty();
    }

    processProduct(): void {
        if (this.formProduct.invalid) {
            const productInvalidMessage = 'Preencha o formulário';
            this.poNotificationService.warning(productInvalidMessage);
        } else {
            this.submitForm();
            this.primaryAction.loading = true;
            setTimeout(() => {
                this.poNotificationService.success(
                    'Produto adicionado com sucesso'
                );
                this.primaryAction.loading = false;
                this.poModalProduto.close();
            }, 700);
        }
    }
}
