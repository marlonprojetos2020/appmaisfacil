import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageDatatableModule } from '../../../../shared/components/page-datatable/page-datatable.module';
import { CompanyListComponent } from './company-list/company-list.component';

@NgModule({
    declarations: [CompanyListComponent],
    imports: [
        CommonModule,
        PageDatatableModule,
    ],
    exports: [CompanyListComponent],
})
export class CompanyListModule {}
