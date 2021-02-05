import { Component, Input, OnInit } from '@angular/core';
import { PoTableAction } from '@po-ui/ng-components';
import { DatatableColumn } from '../page-datatable/datatable-column';

@Component({
    selector: 'app-dashboard-accordion',
    templateUrl: './dashboard-accordion.component.html',
    styleUrls: ['./dashboard-accordion.component.scss'],
})
export class DashboardAccordionComponent implements OnInit {
    @Input() title = '';
    @Input() text = '';
    @Input() isPending: boolean;

    constructor() {}

    ngOnInit(): void {}
}
