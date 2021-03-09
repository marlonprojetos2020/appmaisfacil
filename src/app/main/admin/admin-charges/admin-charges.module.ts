import { NgModule } from '@angular/core';
import { AdminChargeListModule } from './admin-charge-list/admin-charge-list.module';
import { AdminChargesRoutingModule } from './admin-charges-routing.module';

@NgModule({
    imports: [
        AdminChargesRoutingModule,
        AdminChargeListModule,
    ]
})
export class AdminChargesModule {}
