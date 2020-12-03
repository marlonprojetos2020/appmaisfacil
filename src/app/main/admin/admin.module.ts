import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
    ],
})
export class AdminModule { }
