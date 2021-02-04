import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { Client } from '../../../../../../../shared/components/client-form/models/client';
import { ClientFormService } from '../../../../../../../shared/components/client-form/client-form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'company-invoice-edit-client.component.html',
})
export class CompanyInvoiceEditClientComponent implements OnInit {
    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/empresa' },
            { label: 'Nota Fiscal', link: '/empresa/nota-fiscal' },
            { label: 'Emitir Nota', link: '/empresa/nota-fiscal/emitir-nota' },
            {
                label: 'Editar Cliente',
                link: '',
            },
        ],
    };

    client$: Observable<Client> = null;

    constructor(
        private clientFormService: ClientFormService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.client$ = this.clientFormService.getCLient(
            this.activatedRoute.snapshot.params.id
        );
    }
}
