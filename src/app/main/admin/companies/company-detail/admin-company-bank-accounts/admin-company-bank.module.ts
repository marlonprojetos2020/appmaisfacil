import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminCompanyBankRoutingModule } from './admin-company-bank-routing.module';
import { AdminCompanyBankAccountComponent } from './admin-company-bank-account/admin-company-bank-account/admin-company-bank-account.component';
import { PageDatatableModule } from '../../../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    declarations: [AdminCompanyBankAccountComponent],
    imports: [
        CommonModule,
        AdminCompanyBankRoutingModule,
        PageDatatableModule,
    ],
})

export class AdminCompanyBankModule {}
