import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargeListComponent } from './charge-list/charge-list.component';
import {
    PoButtonModule,
    PoFieldModule,
    PoModalModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { PageDatatableModule } from 'src/app/shared/components/page-datatable/page-datatable.module';

@NgModule({
    declarations: [ChargeListComponent],
    imports: [CommonModule,
        PoPageModule,
        PageDatatableModule,
        PoModalModule,
        PoFieldModule,
        PoButtonModule,
    ],
    exports: [ChargeListComponent],
})

export class ChargeListModule {}