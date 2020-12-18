import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {CompanyExpenseComponent} from './company-expense/company-expense.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [CompanyExpenseComponent],
})
export class CompanyExpenseModule {
}
