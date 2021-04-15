import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoButtonModule,
    PoContainerModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { CompanyExtraServiceComponent } from './company-extra-service/company-extra-service.component';
import { CardExtraServiceModule } from '../../../shared/components/card-extra-service/card-extra-service.module';
import { HelpPopoverModule } from 'src/app/shared/directives/help-popover/help-popover.module';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        CardExtraServiceModule,
        PoButtonModule,
        HelpPopoverModule
    ],
    declarations: [CompanyExtraServiceComponent],
})
export class CompanyExtraServiceModule {}
