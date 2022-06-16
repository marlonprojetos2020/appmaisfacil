import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PoBreadcrumb, PoDialogService, PoModalAction, PoModalComponent, PoNotificationService, PoPageAction, PoTableAction, PoUploadFileRestrictions } from '@po-ui/ng-components';

import { DatatableColumn } from 'src/app/shared/components/page-datatable/datatable-column';
import { PageDatatableComponent } from 'src/app/shared/components/page-datatable/page-datatable/page-datatable.component';
import { Employee } from '../employee';
import { EmployeeListService } from '../employee-list.service';
import { environment } from '../../../../../../environments/environment';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
})

export class EmployeeListComponent implements OnInit {

    @Input() serviceApi: string;
    @Input() showCompanyField: boolean;
    @Input() breadcrumb: PoBreadcrumb;

    modalEmployee: Employee = null;
    urlUploadDocument: string = null;
    isHideLoading = true;
    isPdf = false;

    columns: DatatableColumn[] = [];
    pageActions: PoPageAction[] = [];

    @ViewChild(PageDatatableComponent) dataTableComponent: PageDatatableComponent;
    @ViewChild('modalEmployeeFired', { static: true }) poModalEmployeeFired: PoModalComponent;
    @ViewChild('modalEmployeeHired', { static: true }) poModalEmployeeHired: PoModalComponent;

    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
        maxFileSize: 5242880,
        maxFiles: 1,
    };

    acceptAction: PoModalAction = {
        label: 'Aceitar',
        action: () => this.aprovarContratacao(this.modalEmployee.id),
    };

    refuseAction: PoModalAction = {
        label: 'Recusar',
        action: () => this.reprovarContratacao(this.modalEmployee.id),
    };

    closeModalHired: PoModalAction = {
        label: 'Fechar',
        action: () => this.poModalEmployeeHired.close(),
    };

    tableActions: PoTableAction[] = [
        {
            label: 'Ver Ficha',
            action: (item) => item.status === 'PENDING_FIRED' ? this.openModalFired(item) : this.openModalHired(item),
            disabled: (item) => item.status === 'NOT_FINALIZED',
        },
        // {
        //     label: 'Confirmar Contratação',
        //     action: (item) => this.aprovarContratacao(item),
        //     disabled: (item) => item.status !== 'PENDING_HIRED',
        // },
        // {
        //     label: 'Rejeitar Contratação',
        //     action: (item) => this.reprovarContratacao(item),
        //     disabled: (item) => item.status !== 'PENDING_HIRED',
        // },
        // {
        //     label: 'Confirmar Demissão',
        //     action: (item) => this.confirmarDemissao(item.id),
        //     disabled: (item) => item.status !== 'PENDING_FIRED',
        // },
        {
            label: 'Baixar Ficha de Demissão',
            action: (item) => window.open(item.firedFileUrl, '_blank'),
            disabled: (item) => item.status !== 'FIRED',
        },
    ];


    constructor(
        private poNotificationService: PoNotificationService,
        private employeeListService: EmployeeListService,
        private poDialogService: PoDialogService) {}

    ngOnInit(): void {
        this.columns = [
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
                label: 'Empresa',
                property: 'companyFantasyName',
                visible: this.showCompanyField,
                disableSort: true,
            },
            {
                label: 'Funcionário',
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
    }

    openModalFired(item: Employee): void {
        this.modalEmployee = item;
        this.urlUploadDocument = `${environment.apiUrl}/employee/${this.modalEmployee.id}/fired-file`;
        this.poModalEmployeeFired.open();
    }

    openModalHired(item: Employee): void {
        this.modalEmployee = item;
        this.isPdf = this.modalEmployee.admissionFileUrl.indexOf('pdf') < 0 ? false : true;
        this.urlUploadDocument = null;
        this.poModalEmployeeHired.open();
    }

    refreshTable(): void {
        this.dataTableComponent.loadItems();
    }

    onLoad(): void {
        this.isHideLoading = false;
    }

    download(link: string): void {
        window.open(link, '_blank');
    }

    success(): void {
        this.isHideLoading = true;
        const message = 'Documento carregado com sucesso';
        this.poNotificationService.success(message);
        this.refreshTable();
        this.poModalEmployeeFired.close();
    }

    aprovarContratacao(id): void {
        this.poDialogService.confirm({
            title: 'Aprovar Contratação',
            message: `Tem certeza que deseja aprovar esta contratação ?`,
            confirm: () => {
                this.employeeListService
                    .acceptHired(id)
                    .subscribe(() => {
                        this.refreshTable();
                        this.poNotificationService.success('Funcionário contratado');
                        this.poModalEmployeeHired.close();
                    });
            },
        });
    }

    reprovarContratacao(id): void {
        this.poDialogService.confirm({
            title: 'Rejeitar Contratação',
            message: `Tem certeza que deseja rejeitar esta contratação ?`,
            confirm: () => {
                this.employeeListService
                    .refuseHired(id)
                    .subscribe(() => {
                        this.refreshTable();
                        this.poNotificationService.success('Funcionário rejeitado');
                        this.poModalEmployeeHired.close();
                    });
            },
        });
    }

    confirmarDemissao(id): void {
        this.poDialogService.confirm({
            title: 'Confirmar Contratação',
            message: `Tem certeza que deseja rejeitar esta contratação ?`,
            confirm: () => {
                this.employeeListService
                    .refuseHired(id)
                    .subscribe(() => {
                        this.refreshTable();
                        this.poNotificationService.success('Funcionário rejeitado');
                        this.poModalEmployeeHired.close();
                    });
            },
        });
    }

}
