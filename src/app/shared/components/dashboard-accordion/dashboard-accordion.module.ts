import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAccordionComponent } from './dashboard-accordion.component';
import { PoAccordionModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [DashboardAccordionComponent],
    imports: [
        CommonModule,
        PoAccordionModule,
    ],
    exports: [DashboardAccordionComponent],
})
export class DashboardAccordionModule {}
