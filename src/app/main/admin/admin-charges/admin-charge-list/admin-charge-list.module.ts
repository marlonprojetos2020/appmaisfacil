import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminChargeListComponent } from './admin-charge-list/admin-charge-list.component';
import {
    PoButtonModule,
    PoFieldModule,
    PoModalModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { PageDatatableModule } from 'src/app/shared/components/page-datatable/page-datatable.module';

@NgModule({
    declarations: [AdminChargeListComponent],
    imports: [
        CommonModule,
        PoPageModule,
        PageDatatableModule,
        PoModalModule,
        PoFieldModule,
        PoButtonModule,
    ],
    exports: [AdminChargeListComponent],
})
export class AdminChargeListModule {}
