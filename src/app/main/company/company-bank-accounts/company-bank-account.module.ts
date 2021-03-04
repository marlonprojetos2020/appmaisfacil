import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';

import { CompanyBankAccountComponent } from './company-bank-account/company-bank-account.component';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    declarations: [CompanyBankAccountComponent],
    imports: [
        CommonModule,
        PoPageModule,
        PageDatatableModule,
    ],
})
export class CompanyBankAccountModule {}
