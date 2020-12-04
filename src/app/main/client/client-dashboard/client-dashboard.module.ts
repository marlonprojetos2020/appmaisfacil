import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { ClientDashboardComponent } from './client-dashboard.component';
import { HeadTextModule} from '../../../shared/components/head-text/head-text.module';
import { ClientDashboardRoutingModule } from './client-dasboard-routing.module';

@NgModule({
    declarations: [ ClientDashboardComponent ],
    imports: [
        PoPageModule,
        CommonModule,
        HeadTextModule,
        ClientDashboardRoutingModule,
    ],
})
export class ClientDashboardModule { }
