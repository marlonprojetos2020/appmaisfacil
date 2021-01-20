import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoPageAction } from '@po-ui/ng-components';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../../../../companies.service';
import { User } from '../../../../model/user';

@Component({
    templateUrl: 'admin-company-new-charge.component.html',
    styleUrls: ['admin-company-new-charge.component.scss'],
})
export class AdminCompanyNewChargeComponent implements OnInit {
    actions: Array<PoPageAction> = [
        {
            label: 'Voltar',
            url: `admin/empresa/${this.activatedRoute.snapshot.params.id}/cobrancas`,
        },
    ];

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private companiesService: CompaniesService
    ) {}

    ngOnInit(): void {
        this.companiesService
            .getUserCompany(this.activatedRoute.snapshot.params.id)
            .subscribe((data) => this.setBreadcrumb(data));
    }

    setBreadcrumb(user: User): void {
        this.breadcrumb.items.push(
            { label: 'Inicio', link: '/admin' },
            { label: 'Empresas', link: '/admin/empresas' },
            {
                label: user.userCompany.fantasyName,
                link: `/admin/empresa/${user.id}`,
            },
            { label: 'Cobranças', link: `/admin/empresa/${user.id}/cobranca` },
            { label: 'Nova Cobrança' }
        );
    }
}
