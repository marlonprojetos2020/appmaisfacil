import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {AdminCompanyExtraServiceComponent} from './admin-company-extra-service/admin-company-extra-service.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [AdminCompanyExtraServiceComponent],
})
export class AdminCompanyExtraServiceModule {}
