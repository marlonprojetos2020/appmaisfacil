import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../models/client';
import { CompanyInvoicesNewClientService } from '../company-invoices-new-client.service';
import { Location } from '@angular/common';

@Component({
    templateUrl: 'company-invoices-new-client.component.html',
})
export class CompanyInvoicesNewClientComponent implements OnInit {
    formClient: FormGroup;

    newClient: Client;

    options = [
        {
            label: 'Acre',
            value: 'AC',
        },
        {
            label: 'Alagoas',
            value: 'AL',
        },
        {
            label: 'Amazonas',
            value: 'AM',
        },
        {
            label: 'Amapá',
            value: 'AP',
        },
        {
            label: 'Bahia',
            value: 'BA',
        },
        {
            label: 'Ceará',
            value: 'CE',
        },
        {
            label: 'Distrito Federal',
            value: 'DF',
        },
        {
            label: 'Espírito Santo',
            value: 'ES',
        },
        {
            label: 'Goiás',
            value: 'GO',
        },
        {
            label: 'Maranhão',
            value: 'MA',
        },
        {
            label: 'Minas Gerais',
            value: 'MG',
        },
        {
            label: 'Mato Grosso do Sul',
            value: 'MS',
        },
        {
            label: 'Mato Grosso',
            value: 'MT',
        },
        {
            label: 'Pará',
            value: 'PA',
        },
        {
            label: 'Paraíba',
            value: 'PB',
        },
        {
            label: 'Pernambuco',
            value: 'PE',
        },
        {
            label: 'Piauí',
            value: 'PI',
        },
        {
            label: 'Paraná',
            value: 'PR',
        },
        {
            label: 'Rio de Janeiro',
            value: 'RJ',
        },
        {
            label: 'Rio Grande do Norte',
            value: 'RN',
        },
        {
            label: 'Rondônia',
            value: 'RO',
        },
        {
            label: 'Roraima',
            value: 'RR',
        },
        {
            label: 'Rio Grande do Sul',
            value: 'RS',
        },
        {
            label: 'Santa Catarina',
            value: 'SC',
        },
        {
            label: 'Sergipe',
            value: 'SE',
        },
        {
            label: 'São Paulo',
            value: 'SP',
        },
        {
            label: 'Tocatins',
            value: 'TO',
        },
    ];

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Nota Fiscal', link: '/empresa/nota-fiscal' },
            { label: 'Emitir Nota', link: '/empresa/nota-fiscal/emitir-nota' },
            {
                label: 'Novo Cliente',
                link: '/empresa/nota-fiscal/emitir-nota/novo-cliente',
            },
        ],
    };

    constructor(
        private formBuilder: FormBuilder,
        private companyInvoicesNewClient: CompanyInvoicesNewClientService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.formClient = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            document: ['', Validators.required],
            phone: ['', Validators.required],
            contactName: ['', Validators.required],
            municipalInscription: ['', Validators.required],
            stateInscription: ['', Validators.required],
            address: this.formBuilder.group({
                zipcode: ['', Validators.required],
                street: ['', Validators.required],
                number: ['', Validators.required],
                neighborhood: ['', Validators.required],
                complement: ['', Validators.required],
                city: this.formBuilder.group({
                    name: ['', Validators.required],
                    stateProvince: ['', Validators.required],
                }),
            }),
        });
    }

    submitForm(): void {
        this.newClient = this.formClient.getRawValue() as Client;

        console.log(this.newClient);

        this.companyInvoicesNewClient
            .createClient(this.newClient)
            .subscribe((data) => console.log(data));

        this.location.back();
    }
}
