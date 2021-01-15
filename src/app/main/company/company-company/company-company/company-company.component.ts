import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PoPageAction } from '@po-ui/ng-components';
import { Company } from '../../../admin/companies/model/company';
import { User } from '../../../admin/companies/model/user';
import { CompanyCompanyService } from '../company-company.service';

@Component({
    templateUrl: 'company-company.component.html',
    styleUrls: ['company-company.component.scss'],
})
export class CompanyCompanyComponent implements OnInit {
    formCompany: FormGroup;
    actions: PoPageAction[] = [];

    @Input() editedUser: User;

    constructor(
        private formBuilder: FormBuilder,
        private activetedRoute: ActivatedRoute,
        private companyService: CompanyCompanyService
    ) {}

    ngOnInit(): void {
        this.companyService.getUserCompany(1).subscribe((data) => {
            this.setFields(data.userCompany);
        });
    }

    setFields(company: Company): void {
        this.formCompany = this.formBuilder.group({
            cnpj: [company?.cnpj, Validators.required],
            socialReason: [company?.socialReason, Validators.required],
            fantasyName: [company?.fantasyName, Validators.required],
            type: [company?.type, Validators.required],
            lineOfBusiness: [company?.lineOfBusiness, Validators.required],

            cnae: [company?.cnae, Validators.required],
            address: this.formBuilder.group({
                street: [company.address.street, Validators.required],
                number: [company.address.number, Validators.required],
                neighborhood: [
                    company.address.neighborhood,
                    Validators.required,
                ],
                complement: [company.address.complement, Validators.required],
                zipcode: [company.address.zipcode, Validators.required],
                city: this.formBuilder.group({
                    name: [company.address.city.name, Validators.required],
                    stateProvince: [
                        company.address.city.stateProvince,
                        Validators.required,
                    ],
                }),
            }),
            email: [company.email, Validators.required],
            phone: [company.phone, Validators.required],
        });
    }
}
