import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBankStatementListComponent } from './admin-bank-statement-list/admin-bank-statement-list.component';
import { PoPageModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [AdminBankStatementListComponent],
    imports: [
        CommonModule,
        PoPageModule,
    ],
    exports: [AdminBankStatementListComponent],
})
export class AdminBankStatementListModule {}
