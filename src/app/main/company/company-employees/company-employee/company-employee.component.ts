import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoNotificationService,
    PoPageAction,
    PoTableAction,
} from '@po-ui/ng-components';
import { environment } from '../../../../../environments/environment';
import { DatatableColumn } from '../../../../shared/components/page-datatable/datatable-column';
import { CompanyEmployee } from '../models/company-employee';
import { CompanyEmployeeService } from '../company-employee.service';
import { Router } from '@angular/router';
import { PageDatatableComponent } from '../../../../shared/components/page-datatable/page-datatable/page-datatable.component';

@Component({
    templateUrl: './company-employee.component.html',
})
export class CompanyEmployeeComponent implements OnInit {
    companyEmployee: CompanyEmployee;
    setStatus: string;

    @ViewChild(PageDatatableComponent)
    dataTableComponent: PageDatatableComponent;

    breadcrumb: PoBreadcrumb = {
        items: [],
    };

    @Input() funcionario: string = '';

    primaryAction: PoModalAction = {
        label: 'Demitir',
        action: () => {
            this.companyEmployeeService
                .requestFired(this.companyEmployee.id)
                .subscribe(() => {
                    this.dataTableComponent.ngOnInit();
                    this.notification.success('Pedido de demissão concluído');
                });
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
        {
            label: 'Editar registo',
            action: (item) => {
                this.router.navigateByUrl(
                    `/empresa/funcionarios/editar-funcionario/${item.id}`
                );
            },
        },
        {
            label: 'Baixar Termo de Contratação',
            action: (item) => window.open(item.admissionFileUrl, '_blank'),
        },
    ];
    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'status',
            type: 'label',
            labels: [
                { value: 'FIRED', color: 'color-07', label: 'Demitido' },
                { value: 'NOT_FINALIZED', color: 'color-03', label: 'Incompleto' },
                { value: 'PENDING_HIRED', color: 'color-08', label: 'Pendente' },
                { value: 'PENDING_FIRED', color: 'color-01', label: 'Pedido Demissão' },
                { value: 'HIRED', color: 'color-12', label: 'Contratado' },
                { value: 'REFUSED_HIRED', color: 'color-05', label: 'Recusado' },
            ],
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
            type: 'date',
            format: 'dd/MM/yyyy',
        },
    ];

    constructor(
        private companyEmployeeService: CompanyEmployeeService,
        private router: Router,
        private notification: PoNotificationService
    ) {}

    ngOnInit(): void {
        this.setBreadCrumbs();
    }

    prepareModal(companyEmployee: CompanyEmployee): void {
        this.poModalEmployee.open();
    }

    setBreadCrumbs(): void {
        this.breadcrumb.items.push(
            { label: 'Início', link: '/empresa' },
            { label: 'Funcionários', link: '/empresa/funcionarios' },
        );
    }
}
