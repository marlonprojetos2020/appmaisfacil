import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminChargeListComponent } from './admin-charge-list/admin-charge-list.component';
import { PoPageModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [AdminChargeListComponent],
    imports: [
        CommonModule,
        PoPageModule,
    ],
    exports: [AdminChargeListComponent],
})
export class AdminChargeListModule {}
