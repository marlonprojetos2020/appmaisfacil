import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDashboardComponent } from './card-dashboard/card-dashboard.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CardDashboardComponent],
    exports: [CardDashboardComponent],
})
export class CardDashboardModule {}
