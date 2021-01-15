import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageModule } from '@po-ui/ng-components';
import { AdminCompanyChargeComponent } from './admin-company-charge/admin-company-charge.component';
import { PageDatatableModule } from '../../../../../shared/components/page-datatable/page-datatable.module';
import { AdminCompanyNewChargeModule } from './admin-company-new-charge/admin-company-new-charge.module';
import { AdminCompanyChargeRoutingModule } from './admin-company-charge-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PageDatatableModule,
        AdminCompanyNewChargeModule,
        AdminCompanyChargeRoutingModule,
    ],
    declarations: [AdminCompanyChargeComponent],
    exports: [AdminCompanyChargeComponent],
})
export class AdminCompanyChargeModule {}
