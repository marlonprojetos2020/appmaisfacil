import { NgModule } from '@angular/core';
import { PoPopoverModule } from '@po-ui/ng-components';
import { HelpPopoverDirective } from './help-popover.directive';

@NgModule({
    declarations: [HelpPopoverDirective],
    imports: [],
    exports: [
        HelpPopoverDirective,
    ],
})
export class HelpPopoverModule {}
