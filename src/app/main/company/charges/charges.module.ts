import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargeListComponent } from './charge-list/charge-list.component';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';
import {
    PoButtonModule,
    PoFieldModule,
    PoModalModule,
} from '@po-ui/ng-components';

@NgModule({
    declarations: [ChargeListComponent],
    imports: [
        CommonModule,
        PageDatatableModule,
        PoModalModule,
        PoButtonModule,
        PoFieldModule,
    ],
    exports: [ChargeListComponent],
})
export class ChargesModule {}
