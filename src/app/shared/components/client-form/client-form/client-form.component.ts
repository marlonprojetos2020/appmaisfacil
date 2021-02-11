import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoBreadcrumb, PoSelectOption } from '@po-ui/ng-components';
import { Location } from '@angular/common';
import { CompaniesService } from '../../../../main/admin/companies/companies.service';
import { filter, finalize, tap } from 'rxjs/operators';
import { AddressApiResponse } from '../../../../main/admin/companies/model/address-api-response';
import { ClientFormService } from '../client-form.service';
import { Client } from '../models/client';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'client-form.component.html',
    selector: 'app-client-form',
})
export class ClientFormComponent implements OnInit {
    formClient: FormGroup;

    @Input() editedClient: Client;

    newClient: Client;

    zipcodeError = false;

    loading = false;

    latestZipCode = '';

    @ViewChild('streetInput', { static: true }) streetInput: HTMLInputElement;
    @ViewChild('numberInput', { static: true }) numberInput: HTMLInputElement;

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

    options: PoSelectOption[] = [
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
            label: 'Goías',
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
            value: 'PB',
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
            label: 'Tocantins',
            value: 'TO',
        },
    ];

    constructor(
        private formBuilder: FormBuilder,
        private clientFormService: ClientFormService,
        private location: Location,
        private companiesService: CompaniesService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.formClient = this.formBuilder.group({
            name: [this.editedClient?.name, Validators.required],
            email: [this.editedClient?.email, Validators.required],
            document: [this.editedClient?.document, Validators.required],
            phone: [this.editedClient?.phone, Validators.required],
            contactName: [this.editedClient?.contactName, Validators.required],
            municipalInscription: [
                this.editedClient?.municipalInscription,
                Validators.required,
            ],
            stateInscription: [
                this.editedClient?.stateInscription,
                Validators.required,
            ],
            address: this.formBuilder.group({
                zipcode: [
                    this.editedClient?.address.zipcode,
                    Validators.required,
                ],
                street: [
                    this.editedClient?.address.street,
                    Validators.required,
                ],
                number: [
                    this.editedClient?.address.number,
                    Validators.required,
                ],
                neighborhood: [
                    this.editedClient?.address.neighborhood,
                    Validators.required,
                ],
                complement: [this.editedClient?.address.complement],
                city: this.formBuilder.group({
                    name: [
                        this.editedClient?.address.city.name,
                        Validators.required,
                    ],
                    stateProvince: [
                        this.editedClient?.address.city.stateProvince,
                        Validators.required,
                    ],
                }),
            }),
        });

        this.formClient
            .get('address.zipcode')
            .valueChanges.pipe(filter((data) => data !== this.latestZipCode))
            .pipe(tap((data) => (this.latestZipCode = data)))
            .pipe(tap(() => (this.zipcodeError = false)))
            .subscribe(this.updateZipcode.bind(this));
    }

    updateZipcode(): void {
        if (this.formClient.get('address.zipcode').valid) {
            this.companiesService
                .getAddressFromZipcode(
                    this.formClient.get('address.zipcode').value
                )
                .subscribe((addressApiResponse: AddressApiResponse) => {
                    if (addressApiResponse.logradouro) {
                        this.formClient
                            .get('address.street')
                            .setValue(addressApiResponse.logradouro);
                    }
                    if (addressApiResponse.bairro) {
                        this.formClient
                            .get('address.neighborhood')
                            .setValue(addressApiResponse.bairro);
                    }
                    // if (addressApiResponse.complemento) {
                    //     this.formClient.get('address.complement').setValue(addressApiResponse.complemento);
                    // }
                    this.formClient
                        .get('address.city.name')
                        .setValue(addressApiResponse.localidade);
                    this.formClient
                        .get('address.city.stateProvince')
                        .setValue(addressApiResponse.uf);

                    this.zipcodeError = addressApiResponse.erro;

                    if (this.numberInput && this.streetInput) {
                        addressApiResponse.logradouro
                            ? this.numberInput.focus()
                            : this.streetInput.focus();
                    }
                });
        }
    }

    submitForm(): void {
        this.loading = true;

        this.newClient = this.formClient.getRawValue() as Client;

        if (!this.editedClient) {
            this.clientFormService
                .createClient(this.newClient)
                .pipe(finalize(() => (this.loading = false)))
                .subscribe();
            this.location.back();
        } else {
            this.clientFormService
                .editClient(
                    this.newClient,
                    this.activatedRoute.snapshot.params.id
                )
                .pipe(finalize(() => (this.loading = false)))
                .subscribe();
            this.location.back();
        }
    }

    dirtyMe(input): void {
        this.formClient.get(input).markAsDirty();
    }
}
