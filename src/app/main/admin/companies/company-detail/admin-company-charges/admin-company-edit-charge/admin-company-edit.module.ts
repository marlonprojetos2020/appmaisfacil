import { NgModule } from '@angular/core';
import { AdminCompanyEditChargeComponent } from './admin-company-edit-charge/admin-company-edit-charge.component';
import { CommonModule } from '@angular/common';
import { PoPageModule } from '@po-ui/ng-components';
import { ChageFormModule } from '../../../../../../shared/components/charge-form/chage-form.module';

@NgModule({
    declarations: [AdminCompanyEditChargeComponent],
    imports: [CommonModule, PoPageModule, ChageFormModule],
})
export class AdminCompanyEditModule {}
