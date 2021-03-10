import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminChargeListComponent } from './admin-charge-list/admin-charge-list.component';
import { ChargeListModule } from 'src/app/main/admin/shared/charge-list/charge-list.module';

@NgModule({
    declarations: [AdminChargeListComponent],
    imports: [
        CommonModule,
        ChargeListModule,
    ],
    exports: [AdminChargeListComponent],
})
export class AdminChargeListModule {}
