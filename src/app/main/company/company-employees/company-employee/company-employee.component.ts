import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import { CompanyEmployee } from '../models/company-employee';
import { CompanyEmployeeService } from '../company-employee.service';

@Component({
    templateUrl: './company-employee.component.html',
})
export class CompanyEmployeeComponent implements OnInit {
    companyEmployee: CompanyEmployee;
    setStatus: string;

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    @Input() funcionario: string = '';

    primaryAction: PoModalAction = {
        label: 'Demitir',
        action: () => {
            this.companyEmployeeService
                .requestFired(this.companyEmployee.id)
                .subscribe(
                    (data) => (this.companyEmployee.status = data.statusText)
                );
            this.poModalEmployee.close();
        },
    };

    secondaryAction: PoModalAction = {
        action: () => this.poModalEmployee.close(),
        label: 'Cancelar',
    };

    @ViewChild('modalEmployee', { static: true })
    poModalEmployee: PoModalComponent;

    pageActions: PoPageAction[] = [
        {
            label: 'Novo Funcionário',
            icon: 'po-icon-plus-circle',
            url: `/empresa/funcionarios/cadastro`,
        },
    ];

    serviceApi = `${environment.apiUrl}/company/employee/p/search`;
    tableActions: PoTableAction[] = [
        {
            label: 'Demitir',
            action: (item) => {
                this.prepareModal(item);
                this.companyEmployee = item as CompanyEmployee;
                this.funcionario = this.companyEmployee.name;
            },
            disabled: (item) =>
                item.status === 'PENDING_FIRED' || item.status === 'FIRED',
        },
    ];
    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'statusText',
        },
        {
            label: 'Nome',
            property: 'name',
        },
        {
            label: 'Categoria',
            property: 'category',
        },
        {
            label: 'Admissão',
            property: 'admissionAt',
        },
    ];

    constructor(private companyEmployeeService: CompanyEmployeeService) {}

    ngOnInit(): void {
        this.setBreadCrumbs();
    }

    prepareModal(companyEmployee: CompanyEmployee): void {
        this.poModalEmployee.open();
    }

    setBreadCrumbs(): void {
        this.breadcrumb.items.push(
            { label: 'Início', link: '/empresa' },
            { label: 'Funcionários', link: '/empresa/funcionarios' }
        );
    }
}
