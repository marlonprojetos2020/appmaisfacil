import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoBreadcrumbModule, PoPageModule } from '@po-ui/ng-components';
import { CompanyFaqComponent } from './company-faq/company-faq.component';

@NgModule({
    imports: [CommonModule, PoPageModule, PoBreadcrumbModule],
    declarations: [CompanyFaqComponent],
})
export class CompanyFaqModule {}
