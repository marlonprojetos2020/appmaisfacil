import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    PoBreadcrumb,
    PoModalAction,
    PoModalComponent,
    PoNotificationService,
    PoPageAction,
    PoTableAction,
    PoUploadFileRestrictions,
} from '@po-ui/ng-components';
import { environment } from '../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../shared/components/page-datatable/datatable-column';
import { CompanyEmployee } from '../../../../company/company-employees/models/company-employee';
import { AdminEmployeeService } from '../../admin-employee.service';

@Component({
    templateUrl: 'admin-employee-fired.component.html',
})
export class AdminEmployeeFiredComponent implements OnInit {
    @Input() employeeName: string;
    @Input() employeeCompany: string;

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
        private adminEmployeeService: AdminEmployeeService
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
        this.poModalEmployeeFired.close();
    }
}
