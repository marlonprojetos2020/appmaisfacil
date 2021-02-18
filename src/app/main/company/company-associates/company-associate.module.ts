import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyAssociateComponent } from './company-associate/company-associate.component';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';
import { HelpPopoverModule } from '../../../shared/directives/help-popover/help-popover.module';

@NgModule({
    imports: [CommonModule, PageDatatableModule, HelpPopoverModule],
    declarations: [CompanyAssociateComponent],
})
export class CompanyAssociateModule {}
