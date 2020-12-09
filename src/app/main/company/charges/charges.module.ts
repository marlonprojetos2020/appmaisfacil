import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargeListComponent } from './charge-list/charge-list.component';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    declarations: [ChargeListComponent],
    imports: [
        CommonModule,
        PageDatatableModule,
    ],
    exports: [ChargeListComponent],
})
export class ChargesModule {}
