import {Component} from '@angular/core';
import {PoPageAction} from '@po-ui/ng-components';

@Component({
    templateUrl: './company-employee.component.html',
})
export class CompanyEmployeeComponent{
    actions: Array<PoPageAction> = [
        {
            label: '+ Funcionário',
            url: '/empresa/funcionarios/cadastro',
        },
    ];
}
