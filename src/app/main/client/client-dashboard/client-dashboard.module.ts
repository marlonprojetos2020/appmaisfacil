import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { ClientDashboardComponent } from './client-dashboard.component';
import { HeadTextModule } from '../../../shared/components/head-text/head-text.module';
import { DisclaimerModule } from '../../../shared/components/disclaimer/disclaimer.module';

@NgModule({
    declarations: [ClientDashboardComponent],
    imports: [PoPageModule, CommonModule, HeadTextModule, DisclaimerModule],
    exports: [ClientDashboardComponent],
})
export class ClientDashboardModule {}
