import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule, PoFieldModule, PoModalModule, PoPageModule } from '@po-ui/ng-components';
import { AdminCompanyChargeComponent } from './admin-company-charge/admin-company-charge.component';
import { PageDatatableModule } from '../../../../../shared/components/page-datatable/page-datatable.module';
import { AdminCompanyNewChargeModule } from './admin-company-new-charge/admin-company-new-charge.module';
import { AdminCompanyChargeRoutingModule } from './admin-company-charge-routing.module';
import { ChargeListModule } from '../../../shared/charge-list/charge-list.module';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        AdminCompanyNewChargeModule,
        AdminCompanyChargeRoutingModule,
        PoFieldModule,
        PoButtonModule,
        ChargeListModule,
    ],
    declarations: [AdminCompanyChargeComponent],
    exports: [AdminCompanyChargeComponent],
})
export class AdminCompanyChargeModule {}
