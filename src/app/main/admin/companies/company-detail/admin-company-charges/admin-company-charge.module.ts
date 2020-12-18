import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {AdminCompanyChargeComponent} from './admin-company-charge/admin-company-charge.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [AdminCompanyChargeComponent],
})
export class AdminCompanyChargeModule {
}
