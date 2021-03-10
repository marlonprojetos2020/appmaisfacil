import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankStatementListComponent } from './bank-statement-list/bank-statement-list.component';
import {
    PoButtonModule,
    PoFieldModule,
    PoModalModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { PageDatatableModule } from 'src/app/shared/components/page-datatable/page-datatable.module';

@NgModule({
    declarations: [BankStatementListComponent],
    imports: [
        CommonModule,
        PoPageModule,
        PageDatatableModule,
        PoModalModule,
        PoFieldModule,
        PoButtonModule,
    ],
    exports: [BankStatementListComponent],
})

export class BankStatementListModule {}