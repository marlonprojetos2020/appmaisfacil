import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingBarComponent} from './loading-bar/loading-bar.component';
import {PoProgressModule} from '@po-ui/ng-components';

@NgModule({
    declarations: [LoadingBarComponent],
    imports: [
        CommonModule,
        PoProgressModule,
    ],
    exports: [
        LoadingBarComponent
    ]
})
export class LoadingBarModule {
}
