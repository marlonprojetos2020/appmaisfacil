import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBankStatementListComponent } from './admin-bank-statement-list/admin-bank-statement-list.component';
import { PageDatatableModule } from '../../../../shared/components/page-datatable/page-datatable.module';
import { PoModalModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [AdminBankStatementListComponent],
    imports: [CommonModule, PageDatatableModule, PoModalModule],
    exports: [AdminBankStatementListComponent],
})
export class AdminBankStatementListModule {}
