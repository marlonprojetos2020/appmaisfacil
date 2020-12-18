import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {AdminCompanyFaqComponent} from './admin-company-faq/admin-company-faq.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [AdminCompanyFaqComponent],
})
export class AdminCompanyFaqModule{}
