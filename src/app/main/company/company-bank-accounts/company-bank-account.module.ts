import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';

import { CompanyBankAccountRoutingModule } from './company-bank-account-routing.module';
import { CompanyBankAccountComponent } from './company-bank-account/company-bank-account.component';
import { CompanyNewBankAccountModule } from './company-new-bank-account/company-new-bank-account.module'
import { CompanyEditBankAccountModule } from './company-edit-bank-account/company-edit-bank-account.module'
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    declarations: [CompanyBankAccountComponent],
    imports: [
        CommonModule,
        CompanyBankAccountRoutingModule,
        CompanyNewBankAccountModule,
        CompanyEditBankAccountModule,
        PoPageModule,
        PageDatatableModule,
    ],
})
export class CompanyBankAccountModule {}
