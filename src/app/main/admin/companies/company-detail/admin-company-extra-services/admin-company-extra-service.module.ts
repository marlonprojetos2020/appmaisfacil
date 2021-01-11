import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoButtonModule,
    PoContainerModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { AdminCompanyExtraServiceComponent } from './admin-company-extra-service/admin-company-extra-service.component';
import { CardExtraServiceModule } from '../../../../../shared/components/card-extra-service/card-extra-service.module';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        CardExtraServiceModule,
        PoButtonModule,
    ],
    declarations: [AdminCompanyExtraServiceComponent],
})
export class AdminCompanyExtraServiceModule {}
