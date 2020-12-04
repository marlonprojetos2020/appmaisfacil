import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoContainerModule } from '@po-ui/ng-components';
import { DisclaimerComponent } from './disclaimer.component';

@NgModule({
    declarations: [DisclaimerComponent],
    imports: [CommonModule, PoContainerModule],
    exports: [DisclaimerComponent],
})
export class DisclaimerModule {}
