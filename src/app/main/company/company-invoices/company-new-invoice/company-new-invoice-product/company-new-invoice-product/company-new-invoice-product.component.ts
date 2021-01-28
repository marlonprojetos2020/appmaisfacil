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
import { ActivatedRoute } from '@angular/router';

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

    clienteColumns: DatatableColumn[] = [
        {
            label: 'Nome',
            property: 'name',
        },
        {
            label: 'Documento',
            property: 'document',
        },
    ];

    clienteItems: Array<any> = [];

    primaryAction: PoModalAction = {
        label: 'Salvar',
        action: () => this.submitForm(),
    };

    constructor(
        private formBuilder: FormBuilder,
        private companyNewInvoiceService: CompanyNewInvoiceService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.formProduct = this.formBuilder.group({
            title: ['', Validators.required],
            amount: ['', Validators.required],
            quantity: ['', Validators.required],
            total: ['', Validators.required],
        });

        this.companyNewInvoiceService
            .getClient(this.activatedRoute.snapshot.params.id)
            .subscribe((data) =>
                this.clienteItems.push({
                    name: data.name,
                    document: data.document,
                })
            );
    }

    prepareModal(): void {
        this.poModalProduto.open();
    }

    submitForm(): void {
        this.newInvoice = this.formProduct.getRawValue() as Invoice;

        this.tableItems.push(this.newInvoice);

        this.poModalProduto.close();
    }

    nextForm(): void {
        this.stepper.next();
    }
}
