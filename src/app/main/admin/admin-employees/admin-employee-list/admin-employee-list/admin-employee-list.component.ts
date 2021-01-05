import {Component} from '@angular/core';
import {PoPageAction} from '@po-ui/ng-components';

@Component({
    templateUrl: './admin-employee-list.component.html',
})
export class AdminEmployeeListComponent {
    actions: Array<PoPageAction> = [
        {
            label: '+ Funcionário',
            url: `/admin/funcionarios/cadastro`,
        },
    ];
}
