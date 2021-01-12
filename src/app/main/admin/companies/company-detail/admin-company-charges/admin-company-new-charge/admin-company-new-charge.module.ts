import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { AdminCompanyNewChargeComponent } from './admin-company-new-charge/admin-company-new-charge.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        PoFieldModule,
        PoButtonModule,
        ReactiveFormsModule,
    ],
    declarations: [AdminCompanyNewChargeComponent],
})
export class AdminCompanyNewChargeModule {}
