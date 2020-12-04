import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoPopoverModule } from '@po-ui/ng-components';
import { HeadTextComponent } from './head-text.component';

@NgModule({
    declarations: [ HeadTextComponent ],
    imports: [
        CommonModule,
        PoPopoverModule,
    ],
    exports: [ HeadTextComponent ],
})
export class HeadTextModule {}
