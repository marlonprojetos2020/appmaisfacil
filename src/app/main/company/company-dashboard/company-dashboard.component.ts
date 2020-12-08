import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './company-dashboard.component.html',
})
export class CompanyDashboardComponent implements OnInit {
    helpText = `Painel utilizado para transmitir todas as informações de contabilidade da sua empresa`;

    constructor() {}

    ngOnInit(): void {}
}
