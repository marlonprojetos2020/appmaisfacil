import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoButtonModule,
    PoFieldModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { AdminCompanyNewChargeComponent } from './admin-company-new-charge/admin-company-new-charge.component';

@NgModule({
    imports: [CommonModule, PoPageModule, PoFieldModule, PoButtonModule],
    declarations: [AdminCompanyNewChargeComponent],
})
export class AdminCompanyNewChargeModule {}
