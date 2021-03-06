import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule, PoDividerModule, PoFieldModule, PoLoadingModule, PoModalModule, PoTableModule } from '@po-ui/ng-components';

import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { PipeModule } from '../../../../shared/pipe/pipe.module';
import { PageDatatableModule } from 'src/app/shared/components/page-datatable/page-datatable.module';

@NgModule({
    declarations: [InvoiceListComponent],
    imports: [
        CommonModule,
        PoFieldModule,
        PoButtonModule,
        PageDatatableModule,
        PoModalModule,
        PoTableModule,
        PipeModule,
        PoDividerModule,
        PoLoadingModule,
    ],
    exports: [InvoiceListComponent],
})

export class InvoiceListModule {}
