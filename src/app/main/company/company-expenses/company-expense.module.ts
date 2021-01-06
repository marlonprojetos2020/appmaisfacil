import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoContainerModule, PoPageModule} from '@po-ui/ng-components';
import {CompanyExpenseComponent} from './company-expense/company-expense.component';
import {AtentionCardModule} from '../../../shared/components/atention-card/atention-card.module';

@NgModule({
    imports: [CommonModule, PoPageModule, AtentionCardModule, PoContainerModule],
    declarations: [CompanyExpenseComponent],
})
export class CompanyExpenseModule {
}
