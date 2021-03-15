import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PoBreadcrumb, PoModalAction, PoModalComponent, PoNotificationService, PoPageAction, PoTableAction, PoUploadFileRestrictions } from '@po-ui/ng-components';

import { CompanyEmployee } from 'src/app/main/company/company-employees/models/company-employee';
import { DatatableColumn } from 'src/app/shared/components/page-datatable/datatable-column';
import { PageDatatableComponent } from 'src/app/shared/components/page-datatable/page-datatable/page-datatable.component';
import { EmployeeListService } from '../employee-list.service';
import { environment } from '../../../../../../environments/environment';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
})

export class EmployeeListComponent implements OnInit {
    employeeName: string;
    employeeCompany: string;

    @ViewChild(PageDatatableComponent) dataTable: PageDatatableComponent;

    employeeId: number;

    urlUploadDocument: string;

    pageActions: PoPageAction[] = [];

    @ViewChild('modalEmployeeFired', { static: true })
    poModalEmployeeFired: PoModalComponent;

    breadcrumb: PoBreadcrumb = {
        items: [
            { label: 'Início', link: '/admin' },
            { label: 'Funcionários', link: '/admin/funcionarios' },
            {
                label: 'Confirmar Demissão',
                link: '/admin/funcionarios/confirmar-demissao',
            },
        ],
    };

    serviceApi = `${environment.apiUrl}/employee/p/search?search=PENDING_FIRED`;

    tableActions: PoTableAction[] = [
        {
            label: 'Confirmar Demissão',
            action: (item) => {
                this.poModalEmployeeFired.open();
                this.employeeCompany = item.companyName;
                this.employeeName = item.name;
                this.employeeId = item.id;
                this.setUrlDocument(item.id);
            },
        },
    ];

    restrictions: PoUploadFileRestrictions = {
        allowedExtensions: ['.txt', '.pdf', '.png', '.jpeg', '.jpg'],
        maxFileSize: 5242880,
        maxFiles: 1,
    };

    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'statusText',
        },
        {
            label: 'Empresa',
            property: 'companyFantasyName',
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

    primaryAction: PoModalAction = {
        label: 'Cancelar',
        action: () => this.poModalEmployeeFired.close(),
    };

    constructor(
        private poNotificationService: PoNotificationService,
        private employeeListService: EmployeeListService,
    ) {}

    ngOnInit(): void {}

    prepareModal(companyEmployee: CompanyEmployee): void {
        this.poModalEmployeeFired.open();
    }

    setUrlDocument(id: number): void {
        this.urlUploadDocument = `${environment.apiUrl}/employee/${id}/fired-file`;
    }

    success(): void {
        const message = 'Documento carregado com sucesso';
        this.poNotificationService.success(message);
        this.dataTable.ngOnInit();
        this.poModalEmployeeFired.close();
    }

}