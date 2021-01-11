import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { AdminCompanyNewChargeComponent } from './admin-company-new-charge/admin-company-new-charge.component';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        PoFieldModule,
        PoButtonModule,
    ],
    declarations: [AdminCompanyNewChargeComponent],
})
export class AdminCompanyNewChargeModule {}
