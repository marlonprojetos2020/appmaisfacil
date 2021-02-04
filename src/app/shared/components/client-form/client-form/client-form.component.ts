import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { Location } from '@angular/common';
import { CompaniesService } from '../../../../main/admin/companies/companies.service';
import { filter, tap } from 'rxjs/operators';
import { AddressApiResponse } from '../../../../main/admin/companies/model/address-api-response';
import { ClientFormService } from '../client-form.service';
import { Client } from '../models/client';

@Component({
    templateUrl: 'client-form.component.html',
    selector: 'app-client-form',
})
export class ClientFormComponent implements OnInit {
    formClient: FormGroup;

    newClient: Client;

    zipcodeError = false;

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

    constructor(
        private formBuilder: FormBuilder,
        private clientFormService: ClientFormService,
        private location: Location,
        private companiesService: CompaniesService
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
        this.newClient = this.formClient.getRawValue() as Client;

        console.log(this.newClient);

        this.clientFormService
            .createClient(this.newClient)
            .subscribe((data) => console.log(data));

        this.location.back();
    }

    dirtyMe(input): void {
        this.formClient.get(input).markAsDirty();
    }
}
