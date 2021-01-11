import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {CompanyFaqComponent} from './company-faq/company-faq.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [CompanyFaqComponent],
})
export class CompanyFaqModule{}
