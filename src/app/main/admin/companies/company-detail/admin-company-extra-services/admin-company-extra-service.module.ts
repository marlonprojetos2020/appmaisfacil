import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoContainerModule, PoPageModule} from '@po-ui/ng-components';
import {AdminCompanyExtraServiceComponent} from './admin-company-extra-service/admin-company-extra-service.component';
import {CardExtraServiceModule} from '../../../../../shared/components/card-extra-service/card-extra-service.module';

@NgModule({
    imports: [CommonModule, PoPageModule, PoContainerModule, CardExtraServiceModule],
    declarations: [AdminCompanyExtraServiceComponent],
})
export class AdminCompanyExtraServiceModule {}
