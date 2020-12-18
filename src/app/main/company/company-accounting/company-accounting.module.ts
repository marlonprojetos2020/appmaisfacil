import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {CompanyAccountingComponent} from './company-accounting/company-accounting.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [CompanyAccountingComponent],
})
export class CompanyAccountingModule{}
