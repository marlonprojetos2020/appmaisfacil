import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminChargeListComponent } from './admin-charge-list/admin-charge-list.component';
import { PoModalModule, PoPageModule } from '@po-ui/ng-components';
import { PageDatatableModule } from 'src/app/shared/components/page-datatable/page-datatable.module';

@NgModule({
    declarations: [AdminChargeListComponent],
    imports: [
        CommonModule,
        PoPageModule,
        PageDatatableModule,
        PoModalModule,
    ],
    exports: [AdminChargeListComponent],
})
export class AdminChargeListModule {}
