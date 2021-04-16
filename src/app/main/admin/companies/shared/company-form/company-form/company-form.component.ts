import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
    PoBreadcrumb,
    PoNotificationService,
    PoSelectOption,
} from '@po-ui/ng-components';
import { filter, finalize, tap, timestamp } from 'rxjs/operators';
import { Company } from '../../../model/company';
import { User } from '../../../model/user';
import { CompaniesService } from '../../../companies.service';
import { AddressApiResponse } from '../../../model/address-api-response';
import { RoleType } from 'src/app/core/auth/model/role-type';
import { cpfValidator } from 'src/app/shared/validators/cpfValidator.validator';
import { cnpjValidator } from '../../../../../../shared/validators/cnpjValidator.validator';

@Component({
    selector: 'app-company-form',
    templateUrl: './company-form.component.html',
})
export class CompanyFormComponent implements OnInit {
    @Input() breadcrumb: PoBreadcrumb;
    @Input() editedUser: User;

    formDadosPessoais: FormGroup;
    formDadosEmpresa: FormGroup;
    newCompany: User;
    latestZipCode = '';
    zipcodeError = false;
    loading = false;


    @ViewChild('stepper', { static: true }) stepper;
    @ViewChild('streetInput', { static: true }) streetInput: HTMLInputElement;
    @ViewChild('numberInput', { static: true }) numberInput: HTMLInputElement;

    radioPlannOptions: PoSelectOption[] = null;
    radioAddressOptions: PoSelectOption[] = null;
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
        private companiesService: CompaniesService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.formDadosPessoais = this.formBuilder.group({
            name: [this.editedUser?.name, Validators.required],
            email: [
                this.editedUser?.email,
                Validators.required,
                this.companiesService.isEmailTaken(this.editedUser?.email),
            ],
            userExtraData: this.formBuilder.group({
                phone: [
                    this.editedUser?.userExtraData?.phone,
                    Validators.required,
                ],
                cpf: [
                    this.editedUser?.userExtraData?.cpf,
                    [Validators.required, cpfValidator],
                ],
            }),
        });

        this.formDadosEmpresa = this.formBuilder.group({
            plan: [this.editedUser?.userCompany?.plan?.value, Validators.required],
            cnpj: [
                this.editedUser?.userCompany?.cnpj,
                [Validators.required, cnpjValidator],
            ],
            socialReason: [this.editedUser?.userCompany?.socialReason],
            fantasyName: [this.editedUser?.userCompany?.fantasyName],
            type: [this.editedUser?.userCompany?.type],
            lineOfBusiness: [this.editedUser?.userCompany?.lineOfBusiness],
            cnae: [this.editedUser?.userCompany?.cnae],
            address: this.formBuilder.group({
                addressType: [this.editedUser?.userCompany?.address?.addressType?.value],
                complement: [this.editedUser?.userCompany?.address?.complement],
                zipcode: [this.editedUser?.userCompany?.address?.zipcode],
                street: [this.editedUser?.userCompany?.address?.street],
                number: [this.editedUser?.userCompany?.address?.number],
                neighborhood: [
                    this.editedUser?.userCompany?.address?.neighborhood,
                ],
                city: this.formBuilder.group({
                    name: [this.editedUser?.userCompany?.address?.city.name],
                    stateProvince: [
                        this.editedUser?.userCompany?.address?.city
                            .stateProvince,
                    ],
                }),
            }),
            email: [this.editedUser?.userCompany?.email],
            phone: [this.editedUser?.userCompany?.phone],
        });

        this.companiesService.getPlanOptions().subscribe(data => this.radioPlannOptions = data);
        this.companiesService.getAddressOptions().subscribe(data => this.radioAddressOptions = data);

        this.formDadosEmpresa
            .get('address.zipcode')
            .valueChanges.pipe(filter((data) => data !== this.latestZipCode))
            .pipe(tap((data) => (this.latestZipCode = data)))
            .pipe(tap(() => (this.zipcodeError = false)))
            .subscribe(this.updateZipcode.bind(this));
    }

    updateZipcode(): void {
        if (this.formDadosEmpresa.get('address.zipcode').valid) {
            this.companiesService
                .getAddressFromZipcode(
                    this.formDadosEmpresa.get('address.zipcode').value
                )
                .subscribe((addressApiResponse: AddressApiResponse) => {
                    if (addressApiResponse.logradouro) {
                        this.formDadosEmpresa
                            .get('address.street')
                            .setValue(addressApiResponse.logradouro);
                    }
                    if (addressApiResponse.bairro) {
                        this.formDadosEmpresa
                            .get('address.neighborhood')
                            .setValue(addressApiResponse.bairro);
                    }
                    // if (addressApiResponse.complemento) {
                    //     this.formDadosEmpresa.get('address.complement').setValue(addressApiResponse.complemento);
                    // }
                    this.formDadosEmpresa
                        .get('address.city.name')
                        .setValue(addressApiResponse.localidade);
                    this.formDadosEmpresa
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

    nextForm(): void {
        this.stepper.next();
        this.newCompany = this.formDadosPessoais.getRawValue() as User;
    }

    submitForm(): void {
        this.loading = true;

        this.newCompany.userCompany = this.formDadosEmpresa.getRawValue() as Company;
        if (!this.editedUser) {
            this.newCompany.roles = [
                {
                    value: RoleType.ROLE_COMPANY,
                    label: 'Empresa',
                },
            ];
            this.companiesService
                .createUser(this.newCompany)
                .pipe(finalize(() => (this.loading = false)))
                .subscribe(() => this.router.navigate(['/admin', 'empresas']));
        } else {
            this.newCompany.version = this.editedUser.version;
            this.companiesService
                .editUser(this.newCompany, this.editedUser.id)
                .pipe(finalize(() => (this.loading = false)))
                .subscribe(() => this.router.navigate(['/admin', 'empresa', this.editedUser.id,]));
        }
    }

    dirtyMe(input): void {
        this.formDadosPessoais.get(input).markAsDirty();
    }
}
