import { Component, OnInit } from '@angular/core';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {

    actions: Array<PoPageAction> = [
        {
            label: 'Novo Usuario',
            icon: 'po-icon po-icon-user-add',
            url: '/admin',
        },
    ];

    constructor() {}


    ngOnInit(): void {

    }
}
