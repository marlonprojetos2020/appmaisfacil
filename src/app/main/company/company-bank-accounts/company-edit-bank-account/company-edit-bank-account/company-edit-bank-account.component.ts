import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';

import { CompanyEditBankAccountService } from '../company-edit-bank-account.service';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './company-edit-bank-account.component.html',
})
export class CompanyEditBankAccountComponent implements OnInit {

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    bank$: Observable<any>;


    constructor(
        private activatedRoute: ActivatedRoute,
        private editBankService: CompanyEditBankAccountService,
    ) {}

    ngOnInit(): void {

        const bankAccountId = this.activatedRoute.snapshot.params.bankAccountId;
        this.bank$ = this.editBankService.findBank(bankAccountId);
    }

    setBreadcrumb(): void {
        this.breadcrumb.items.push(
            { label: 'Inicio', link: '/' },
            { label: 'Contas Bancárias', link: `/empresa/contas-bancarias` },
            { label: 'Editar Conta' },
        );
    }
}
