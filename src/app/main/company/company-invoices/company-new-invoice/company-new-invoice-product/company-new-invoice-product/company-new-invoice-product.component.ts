import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/datatable-column';
import {
    PoModalAction,
    PoModalComponent,
    PoTableAction,
} from '@po-ui/ng-components';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Invoice } from '../../models/invoice';
import { CompanyNewInvoiceService } from '../../company-new-invoice.service';

@Component({
    templateUrl: 'company-new-invoice-product.component.html',
})
export class CompanyNewInvoiceProductComponent implements OnInit {
    @ViewChild('modalProduct', { static: true })
    poModalProduto: PoModalComponent;

    @ViewChild('stepper', { static: true }) stepper;

    newInvoice: Invoice;

    total: number;

    tableItems: Array<any> = [];

    formProduct: FormGroup;

    columns: DatatableColumn[] = [
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

    tableActions: PoTableAction[] = [
        {
            label: 'Deletar',
            action: () => console.log('oi'),
        },
    ];

    primaryAction: PoModalAction = {
        label: 'Salvar',
        action: () => this.submitForm(),
    };

    constructor(
        private formBuilder: FormBuilder,
        private companyNewInvoiceService: CompanyNewInvoiceService
    ) {}

    ngOnInit(): void {
        this.formProduct = this.formBuilder.group({
            title: ['', Validators.required],
            amount: ['', Validators.required],
            quantity: ['', Validators.required],
            total: ['', Validators.required],
        });

        console.log(this.formProduct.value.title);
    }

    prepareModal(): void {
        this.poModalProduto.open();
    }

    submitForm(): void {
        this.newInvoice = this.formProduct.getRawValue() as Invoice;

        this.tableItems.push(this.newInvoice);
    }

    nextForm(): void {
        this.stepper.next();
    }
}
