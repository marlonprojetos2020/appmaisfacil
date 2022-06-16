import {NgModule} from '@angular/core';
import {AtentionCardComponent} from './atention-card.component';
import {CommonModule} from '@angular/common';
import {PoContainerModule} from '@po-ui/ng-components';

@NgModule({
    declarations: [AtentionCardComponent],
    imports: [CommonModule, PoContainerModule],
    exports: [AtentionCardComponent],
})
export class AtentionCardModule {
}
