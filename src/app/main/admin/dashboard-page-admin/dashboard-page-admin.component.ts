import {Component, OnInit} from '@angular/core';
import {DashboardAdminService} from './dashboard-admin.service';

import {PoPageAction} from '@po-ui/ng-components';

@Component({
    selector: 'app-dashboard-page-admin',
    templateUrl: './dashboard-page-admin.component.html',
    styleUrls: ['./dashboard-page-admin.component.scss'],
})
export class DashboardPageAdminComponent implements OnInit {

    dashboardAdmin = {};

    constructor(private dashboardAdminService: DashboardAdminService) {
    }

    ngOnInit(): void {
        this.dashboardAdminService.getDashboard().subscribe(
            data => this.dashboardAdmin = data);
    }

}
