import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageModule } from '@po-ui/ng-components';
import { AdminCompanyNewChargeComponent } from './admin-company-new-charge/admin-company-new-charge.component';
import { ChageFormModule } from '../../../../../../shared/components/charge-form/chage-form.module';

@NgModule({
    imports: [CommonModule, PoPageModule, ChageFormModule],
    declarations: [AdminCompanyNewChargeComponent],
    exports: [AdminCompanyNewChargeComponent],
})
export class AdminCompanyNewChargeModule {}
