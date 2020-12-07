import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDatatableComponent } from './page-datable/page-datable.component';
import { PoContainerModule, PoFieldModule, PoTableModule } from '@po-ui/ng-components';
import { PoPageDynamicSearchModule } from '@po-ui/ng-templates';
import { BadgeModule } from '../badge/badge.module';


@NgModule({
    declarations: [PageDatatableComponent],
    exports: [
        PageDatatableComponent,
    ],
    imports: [
        CommonModule,
        PoTableModule,
        PoPageDynamicSearchModule,
        PoContainerModule,
        PoFieldModule,
        BadgeModule,
    ],
})
export class PageDatatableModule {
}
