import { NgModule } from '@angular/core';
import { AdminChargeListModule } from './admin-chage-list/admin-charge-list.module';
import { AdminChargesRoutingModule } from './admin-charges-routing.module';
import { AdminChargesService } from './admin-charges.service';

@NgModule({
    imports: [
        AdminChargesRoutingModule,
        AdminChargeListModule,
    ],
    providers: [AdminChargesService],
})
export class AdminChargesModule {}
