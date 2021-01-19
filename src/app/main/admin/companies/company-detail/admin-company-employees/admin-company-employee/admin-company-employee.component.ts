import { Component, OnInit } from '@angular/core';
import { PoPageAction, PoTableAction } from '@po-ui/ng-components';
import { environment } from '../../../../../../../environments/environment';
import { DatatableColumn } from '../../../../../../shared/components/page-datatable/datatable-column';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './admin-company-employee.component.html',
    styleUrls: ['admin-company-employee.component.scss'],
})
export class AdminCompanyEmployeeComponent implements OnInit {
    pageActions: PoPageAction[] = [];

    serviceApi = '';
    tableActions: PoTableAction[] = [];
    columns: DatatableColumn[] = [
        {
            label: 'Situação',
            property: 'status',
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
        },
    ];

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.serviceApi = `${environment.apiUrl}/users/${this.activatedRoute.snapshot.params.id}/company-employees`;
    }
}
