import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDashboardComponent } from './card-dashboard/card-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [CardDashboardComponent],
    exports: [CardDashboardComponent],
})
export class CardDashboardModule {}
