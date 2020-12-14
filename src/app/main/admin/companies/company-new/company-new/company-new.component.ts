import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { filter, tap } from 'rxjs/operators';
import { Company } from '../../../company-detail/model/company';
import { User } from '../../../company-detail/model/user';
import { CompanyNewService } from '../company-new.service';
import { AddressApiResponse } from '../model/address-api-response';
import { RoleType } from 'src/app/core/auth/model/role-type';

@Component({
    templateUrl: './company-new.component.html',
})
export class CompanyNewComponent implements OnInit {
    formDadosPessoais: FormGroup;
    formDadosEmpresa: FormGroup;
    newCompany: User;
    latestZipCode = '';
    zipcodeError = false;

    @ViewChild('stepper', { static: true }) stepper;
    @ViewChild('streetInput', { static: true }) streetInput: HTMLInputElement;
    @ViewChild('numberInput', { static: true }) numberInput: HTMLInputElement;

    constructor(
        private formBuilder: FormBuilder,
        private companyNewService: CompanyNewService,
        private notificationService: PoNotificationService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.formDadosPessoais = this.formBuilder.group({
            name: ['', Validators.required],
            email: [
                '',
                Validators.required,
                this.companyNewService.isEmailTaken(),
            ],
            userExtraData: this.formBuilder.group({
                phone: ['', Validators.required],
                cpf: ['', Validators.required],
            }),
        });

        this.formDadosEmpresa = this.formBuilder.group({
            cnpj: [''],
            socialReason: [''],
            fantasyName: [''],
            type: [''],
            lineOfBusiness: [''],
            cnae: [''],
            address: this.formBuilder.group({
                complement: [''],
                zipcode: [''],
                street: [''],
                number: [''],
                neighborhood: [''],
                city: this.formBuilder.group({
                    name: [''],
                    stateProvince: [''],
                }),
            }),
            email: [''],
            phone: [''],
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
            this.companyNewService
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
        this.newCompany.roles = [
            {
                value: RoleType.ROLE_COMPANY,
                label: 'Empresa',
            },
        ];

        this.newCompany.userCompany = this.formDadosEmpresa.getRawValue() as Company;
        console.log(this.newCompany);
        // this.companyNewService.createUser(this.newCompany).subscribe(
        //     () => {
        //         this.notificationService.success(`Usuário adicionado com sucesso`);
        //         this.router.navigate(['/admin', 'empresas']);
        //     },
        // );
    }

    dirtyMe(input): void {
        this.formDadosPessoais.get(input).markAsDirty();
    }
}
// id: number;
// email: string;
// name: string;
// roles: [
//         {
//             "_messages": [],
//             "value": "ROLE_COMPANY",
//             "label": "Empresa"
//         },
//         {
//             "_messages": [],
//             "value": "ROLE_ADMIN",
//             "label": "Administrador"
//         }
//     ],
//         "userExtraData": {
//     "phone": "17981008663",
//         "cpf": "42373499851"
// },
// "userCompany": {
//     "cnpj": "79032921000196",
//         "socialReason": "Razão social",
//             "fantasyName": "Nome fantasia",
//             "type": "INDUSTRY",
//             "lineOfBusiness": "Tipo de negócio",
//             "cnae": "CNAE do trampo",
//     "address": {
//         "zipcode": "15043020",
//          "street": "Rua Fernandópolis",
//          "number": "2637",
//          "neighborhood": "Eldorado",
//          "complement": "Casa",
//          "city": {
//             "name": "São José do Rio Preto",
//              "stateProvince": "SP"
//           }
//     },
//     "email": "contato@empresa.com.br",
//     "phone": "17987651231"
// }
// }
