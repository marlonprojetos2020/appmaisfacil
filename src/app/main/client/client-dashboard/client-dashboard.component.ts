import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './client-dashboard.component.html',
})
export class ClientDashboardComponent implements OnInit {

    helpText = `Painel utilizado para transmitir todas as informações de contabilidade da sua empresa`;

    constructor() {}

    ngOnInit(): void {}
}
