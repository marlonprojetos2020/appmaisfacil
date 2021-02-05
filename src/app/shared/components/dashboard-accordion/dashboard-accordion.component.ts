import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-accordion',
    templateUrl: './dashboard-accordion.component.html',
    styleUrls: ['./dashboard-accordion.component.scss'],
})
export class DashboardAccordionComponent implements OnInit {
    @Input() title = '';
    @Input() text = '';
    @Input() isPending;
    @Input() items = [];

    constructor() {}

    ngOnInit(): void {}
}
