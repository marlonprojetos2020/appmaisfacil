import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyChargeListComponent } from './company-charge-list/company-charge-list.component';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';
import {
    PoButtonModule,
    PoFieldModule,
    PoModalModule,
} from '@po-ui/ng-components';
import { HelpPopoverModule } from '../../../shared/directives/help-popover/help-popover.module';

@NgModule({
    declarations: [CompanyChargeListComponent],
    imports: [
        CommonModule,
        PageDatatableModule,
        PoModalModule,
        PoButtonModule,
        PoFieldModule,
        HelpPopoverModule,
    ],
    exports: [CompanyChargeListComponent],
})
export class CompanyChargesModule {}
