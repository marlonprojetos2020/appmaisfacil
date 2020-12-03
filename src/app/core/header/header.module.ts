import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { PoLoginComponent } from '@po-ui/ng-components';

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
    ],
    exports: [HeaderComponent],
})
export class HeaderModule { }
