import { Component, Input, OnInit } from '@angular/core';

@Component({
    templateUrl: 'card-dashboard.component.html',
    styleUrls: ['card-dashboard.component.scss'],
    selector: 'app-card-dashboard',
})
export class CardDashboardComponent implements OnInit {
    @Input() text: string;
    @Input() quantity: number;
    @Input() icon: string;
    @Input() routerLink: string;

    @Input() pendente: boolean;
    @Input() cancelado: boolean;
    @Input() analise: boolean;

    constructor() {}

    ngOnInit(): void {}
}
