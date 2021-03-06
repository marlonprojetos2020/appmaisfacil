import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyBankStatementComponent } from './company-bank-statement/company-bank-statement.component';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';
import { PoFieldModule, PoLoadingModule, PoModalModule } from '@po-ui/ng-components';
import { CompanyNewBankStatementModule } from './company-new-bank-statement/company-new-bank-statement.module';
import { CompanyBankStatementRoutingModule } from './company-bank-statement-routing.module';
import { HelpPopoverModule } from '../../../shared/directives/help-popover/help-popover.module';

@NgModule({
    imports: [
        CommonModule,
        PageDatatableModule,
        PoModalModule,
        PoFieldModule,
        CompanyNewBankStatementModule,
        CompanyBankStatementRoutingModule,
        HelpPopoverModule,
        PoLoadingModule,
    ],
    declarations: [CompanyBankStatementComponent],
})
export class CompanyBankStatementModule {}
