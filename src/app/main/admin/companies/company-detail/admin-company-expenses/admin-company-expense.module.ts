import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {AdminCompanyExpenseComponent} from './admin-company-expense/admin-company-expense.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [AdminCompanyExpenseComponent],
})
export class AdminCompanyExpenseModule{}
