import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAccordionComponent } from './dashboard-accordion.component';
import { PoAccordionModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [DashboardAccordionComponent],
    imports: [CommonModule, PoAccordionModule, RouterModule],
    exports: [DashboardAccordionComponent],
})
export class DashboardAccordionModule {}
