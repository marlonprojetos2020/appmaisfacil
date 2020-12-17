import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
    declarations: [AdminDashboardComponent],
    imports: [
        CommonModule,
        PoPageModule,
    ],
    exports: [AdminDashboardComponent],
})
export class AdminDashboardModule {}
