import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageDatatableComponent} from './page-datatable/page-datatable.component';
import {PoTableModule} from '@po-ui/ng-components';
import {PoPageDynamicSearchModule} from '@po-ui/ng-templates';
import {BadgeModule} from '../badge/badge.module';


@NgModule({
    declarations: [PageDatatableComponent],
    exports: [
        PageDatatableComponent,
    ],
    imports: [
        CommonModule,
        PoTableModule,
        PoPageDynamicSearchModule,
        BadgeModule,
    ],
})
export class PageDatatableModule {
}
