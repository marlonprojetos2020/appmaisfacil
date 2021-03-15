import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PoBreadcrumb, PoModalAction, PoModalComponent, PoNotificationService, PoPageAction, PoTableAction, PoUploadFileRestrictions } from '@po-ui/ng-components';

import { DatatableColumn } from 'src/app/shared/components/page-datatable/datatable-column';
import { PageDatatableComponent } from 'src/app/shared/components/page-datatable/page-datatable/page-datatable.component';
import { Employee } from '../employee';
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

    columns: DatatableColumn[] = [];
    pageActions: PoPageAction[] = [];

    @ViewChild(PageDatatableComponent) dataTable: PageDatatableComponent;
    @ViewChild('modalEmployeeFired', { static: true }) poModalEmployeeFired: PoModalComponent;

    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
        maxFileSize: 5242880,
        maxFiles: 1,
    };

    tableActions: PoTableAction[] = [
        {
            label: 'Confirmar Contratação',
            action: (item) => {
                // TODO
                console.log('contratação feita');
            },
            disabled: (item) => item.status !== 'PENDING_HIRED',
        },
        {
            label: 'Confirmar Demissão',
            action: (item) => {
                this.prepareModal(item);
            },
            disabled: (item) => item.status !== 'PENDING_FIRED',
        },
        {
            label: 'Baixar Ficha de Contratação',
            action: (item) => window.open(item.admissionFileUrl, '_blank'),
            disabled: (item) => item.status === 'NOT_FINALIZED',
        },
        {
            label: 'Baixar Ficha de Demissão',
            action: (item) => window.open(item.firedFileUrl, '_blank'),
            disabled: (item) => item.status !== 'FIRED',
        },
    ];


    primaryAction: PoModalAction = {
        label: 'Cancelar',
        action: () => this.poModalEmployeeFired.close(),
    };

    constructor(private poNotificationService: PoNotificationService) {}

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

    prepareModal(item: Employee): void {
        this.modalEmployee = item;
        this.urlUploadDocument = `${environment.apiUrl}/employee/${this.modalEmployee.id}/fired-file`;
        console.log(this.urlUploadDocument);
        this.poModalEmployeeFired.open();
    }

    onLoad(): void {
        this.isHideLoading = false;
    }

    success(): void {
        const message = 'Documento carregado com sucesso';
        this.poNotificationService.success(message);
        this.dataTable.ngOnInit();
        this.poModalEmployeeFired.close();
    }

}
