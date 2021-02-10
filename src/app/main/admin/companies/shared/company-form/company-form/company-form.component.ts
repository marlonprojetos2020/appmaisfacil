import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoBreadcrumb, PoNotificationService } from '@po-ui/ng-components';
import { filter, finalize, tap } from 'rxjs/operators';
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
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Empresas', link: '/admin/empresas' },
            { label: 'Nova Empresa', link: '/admin/empresas/nova-empresa' },
        ],
    };

    formDadosPessoais: FormGroup;
    formDadosEmpresa: FormGroup;
    newCompany: User;
    latestZipCode = '';
    zipcodeError = false;
    loading = false;

    @Input() editedUser: User;

    @ViewChild('stepper', { static: true }) stepper;
    @ViewChild('streetInput', { static: true }) streetInput: HTMLInputElement;
    @ViewChild('numberInput', { static: true }) numberInput: HTMLInputElement;

    constructor(
        private formBuilder: FormBuilder,
        private companiesService: CompaniesService,
        private notificationService: PoNotificationService,
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
                    this.editedUser?.userExtraData.phone,
                    Validators.required,
                ],
                cpf: [
                    this.editedUser?.userExtraData.cpf,
                    [Validators.required, cpfValidator],
                ],
            }),
        });

        this.formDadosEmpresa = this.formBuilder.group({
            cnpj: [
                this.editedUser?.userCompany.cnpj,
                [Validators.required, cnpjValidator],
            ],
            socialReason: [this.editedUser?.userCompany.socialReason],
            fantasyName: [this.editedUser?.userCompany.fantasyName],
            type: [this.editedUser?.userCompany.type],
            lineOfBusiness: [this.editedUser?.userCompany.lineOfBusiness],
            cnae: [this.editedUser?.userCompany.cnae],
            address: this.formBuilder.group({
                complement: [this.editedUser?.userCompany.address.complement],
                zipcode: [this.editedUser?.userCompany.address.zipcode],
                street: [this.editedUser?.userCompany.address.street],
                number: [this.editedUser?.userCompany.address.number],
                neighborhood: [
                    this.editedUser?.userCompany.address.neighborhood,
                ],
                city: this.formBuilder.group({
                    name: [this.editedUser?.userCompany.address.city.name],
                    stateProvince: [
                        this.editedUser?.userCompany.address.city.stateProvince,
                    ],
                }),
            }),
            email: [this.editedUser?.userCompany.email],
            phone: [this.editedUser?.userCompany.phone],
        });

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
                .subscribe(() => {
                    this.notificationService.success(
                        `Usuário adicionado com sucesso`
                    );
                    this.router.navigate(['/admin', 'empresas']);
                });
        } else {
            this.newCompany.version = this.editedUser.version;
            this.companiesService
                .editUser(this.newCompany, this.editedUser.id)
                .pipe(finalize(() => (this.loading = false)))
                .subscribe(() => {
                    this.notificationService.success(
                        `Usuário editado com sucesso`
                    );
                    this.router.navigate([
                        '/admin',
                        'empresa',
                        this.editedUser.id,
                    ]);
                });
        }
    }

    dirtyMe(input): void {
        this.formDadosPessoais.get(input).markAsDirty();
    }
}
