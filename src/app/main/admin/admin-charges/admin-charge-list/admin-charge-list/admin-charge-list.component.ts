import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PoModalAction, PoModalComponent, PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { DatatableColumn } from 'src/app/shared/components/page-datatable/page-datatable/datatable-column';
import { environment } from 'src/environments/environment';
import { User } from '../../../companies/model/user';

@Component({
    styleUrls: [
        './admin-carge-list.component.scss',
    ],
    templateUrl: './admin-charge-list.component.html',
})
export class AdminChargeListComponent {

    @ViewChild('modalComprovante', { static: true }) poModalComprovante: PoModalComponent;
    @ViewChild('modalCobranca', { static: true }) poModalCobranca: PoModalComponent;


    cobranca =
        // {
        //     status: 'PENDENTE',
        //     isPendente: true,
        //     titulo: 'Imposto de Renda',
        //     tipo: 'Imposto',
        //     vencimento: '28/10/2020',
        //     valor: 50,
        // };
        {
            status: 'EM_ANALISE',
            isPendente: false,
            titulo: 'Imposto de Renda',
            tipo: 'Fatura',
            vencimento: '28/10/2020',
            valor: 50,
        };
    // {
    //     status: 'PAGO',
    //     titulo: 'Imposto de Renda',
    //     tipo: 'Taxa',
    //     vencimento: '28/10/2020',
    //     valor: 50,
    // },

    serviceApi = `${environment.apiUrl}/users/p/search`;
    tableActions: PoTableAction[] = [
        {
            label: 'ver',
            action: (item) => {
                this.prepareModal(item);
            },
        },
    ];

    delete: PoModalAction = {
        action: () => {
            console.log('cancelar');
        },
        label: 'Deletar Cobrança',
        danger: true,
    };

    decline: PoModalAction = {
        action: () => {
            console.log('cancelar');
        },
        label: 'Recusar',
        danger: true,
    };

    confirm: PoModalAction = {
        action: () => {
            console.log('confirmou');
        },
        label: 'Aprovar',
    };

    columns: DatatableColumn[] = [
        {
            label: 'Nome',
            property: 'userCompany.fantasyName',
        },
        {
            label: 'CNPJ',
            property: 'userCompany.cnpj',
        },
        { property: 'name', label: 'Usuário' },
    ];

    constructor(private router: Router) {}

    prepareModal(company: User): void {
        if (this.cobranca.status === 'PENDENTE') {
            this.poModalCobranca.open();
        } else {
            this.poModalComprovante.open();
        }
    }

    showCharge(): void {
        this.poModalComprovante.close();
        this.poModalCobranca.open();
    }

    showReceipt(): void {
        this.poModalCobranca.close();
        this.poModalComprovante.open();
    }
}
