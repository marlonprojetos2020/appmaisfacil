import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageDatatableModule } from '../../../../shared/components/page-datatable/page-datatable.module';
import { CompanyListComponent } from './company-list/company-list.component';
import {PipeModule} from '../../../../shared/pipe/pipe.module';

@NgModule({
    declarations: [CompanyListComponent],
    imports: [
        CommonModule,
        PageDatatableModule,
        PipeModule,
    ],
    exports: [CompanyListComponent],
})
export class CompanyListModule {}
