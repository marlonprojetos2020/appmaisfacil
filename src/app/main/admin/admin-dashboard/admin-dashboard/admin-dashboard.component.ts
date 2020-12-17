import { Component, OnInit } from '@angular/core';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
    templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {

    actions: Array<PoPageAction> = [
        {
            label: 'Nova Empresa',
            icon: 'po-icon-plus-circle',
            url: 'admin/empresas/nova-empresa',
        },
    ];

    constructor() {}


    ngOnInit(): void {

    }
}
