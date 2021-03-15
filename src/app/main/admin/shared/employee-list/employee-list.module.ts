import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {
    PoButtonModule,
    PoFieldModule,
    PoModalModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { PageDatatableModule } from 'src/app/shared/components/page-datatable/page-datatable.module';

@NgModule({
    declarations: [EmployeeListComponent],
    imports: [CommonModule,
        PoPageModule,
        PageDatatableModule,
        PoModalModule,
        PoFieldModule,
        PoButtonModule,
    ],
    exports: [EmployeeListComponent],
})

export class EmployeeListModule {}