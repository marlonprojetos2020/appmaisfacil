import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyAssociateComponent } from './company-associate/company-associate.component';
import { PageDatatableModule } from '../../../shared/components/page-datatable/page-datatable.module';

@NgModule({
    imports: [CommonModule, PageDatatableModule],
    declarations: [CompanyAssociateComponent],
})
export class CompanyAssociateModule{}
