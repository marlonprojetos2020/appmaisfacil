import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCompanyAssociateComponent } from './admin-company-associate/admin-company-associate.component';
import { PageDatatableModule } from '../../../../../shared/components/page-datatable/page-datatable.module';
import { AdminCompanyNewAssociateModule } from './admin-company-new-associate/admin-company-new-associate.module';
import { AdminCompanyAssociateRoutingModule } from './admin-company-associate-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PageDatatableModule,
        AdminCompanyNewAssociateModule,
        AdminCompanyAssociateRoutingModule,
    ],
    declarations: [AdminCompanyAssociateComponent],
})
export class AdminCompanyAssociateModule {}
