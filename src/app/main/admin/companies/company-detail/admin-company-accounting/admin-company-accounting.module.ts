import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {AdminCompanyAccountingComponent} from './admin-company-accounting/admin-company-accounting.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [AdminCompanyAccountingComponent],
})
export class AdminCompanyAccountingModule {
}
