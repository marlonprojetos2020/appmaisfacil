import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBankStatementListComponent } from './admin-bank-statement-list/admin-bank-statement-list.component';
import { PageDatatableModule } from '../../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    declarations: [AdminBankStatementListComponent],
    imports: [
        CommonModule,
        PageDatatableModule,
    ],
    exports: [AdminBankStatementListComponent],
})
export class AdminBankStatementListModule {}
