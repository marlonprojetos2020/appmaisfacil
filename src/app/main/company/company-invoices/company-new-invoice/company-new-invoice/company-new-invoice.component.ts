import { Component, OnInit, ViewChild } from '@angular/core';
import {
    PoModalAction,
    PoModalComponent,
    PoTableAction,
} from '@po-ui/ng-components';
import { DatatableColumn } from '../../../../../shared/components/page-datatable/datatable-column';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../models/invoice';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyNewInvoiceService } from '../company-new-invoice.service';

@Component({
    templateUrl: 'company-new-invoice.component.html',
    styleUrls: ['company-new-invoice.component.scss'],
})
export class CompanyNewInvoiceComponent implements OnInit {
    @ViewChild('modalProduct', { static: true })
    poModalProduto: PoModalComponent;

    @ViewChild('stepper', { static: true }) stepper;

    newInvoice: Invoice;

    total: number;

    cliente = [];

    formProduct: FormGroup;

    idClient: number;

    // Config Step 1
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
                console.log(item);
            },
        },
    ];

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
        },
        {
            label: 'Total',
            property: 'total',
        },
    ];

    actionsStepTwo: PoTableAction[] = [
        {
            label: 'Deletar',
            action: () => console.log('oi'),
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
        action: () => this.submitForm(),
    };

    constructor(
        private formBuilder: FormBuilder,
        private companyNewInvoiceService: CompanyNewInvoiceService,
        private activatedRoute: ActivatedRoute,
        private router: Router
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
        this.poModalProduto.open();
    }

    submitForm(): void {
        this.newInvoice = this.formProduct.getRawValue() as Invoice;

        this.itemsStepTwo.push(this.newInvoice);

        this.poModalProduto.close();

        this.disabledStepTwo = false;
    }

    nextForm(): void {
        this.stepper.next();
    }

    submitInvoice(): void {
        console.log(this.itemsStepTwo);

        console.log(this.newInvoice);
    }

    private totalCalc(): void {
        const amount = this.formProduct.get('amount').value;
        const quantity = this.formProduct.get('quantity').value;

        if (amount && quantity) {
            console.log(amount * quantity);
            this.formProduct.get('total').setValue(`${amount * quantity}`);
        }

        this.formProduct.get('total').setValue('');
    }
}
