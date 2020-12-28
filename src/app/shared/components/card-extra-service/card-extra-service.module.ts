import {NgModule} from '@angular/core';
import {CardExtraServiceComponent} from './card-extra-service.component';
import {CommonModule} from '@angular/common';
import {PoContainerModule} from '@po-ui/ng-components';

@NgModule({
    declarations: [CardExtraServiceComponent],
    imports: [CommonModule, PoContainerModule],
    exports: [CardExtraServiceComponent],
})
export class CardExtraServiceModule {
}
