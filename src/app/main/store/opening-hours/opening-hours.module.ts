import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OpeningHoursRoutingModule} from './opening-hours-routing.module';
import { OpeningHoursComponent } from './opening-hours/opening-hours.component';
import {PoFieldModule, PoLoadingModule, PoPageModule} from '@po-ui/ng-components';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [OpeningHoursComponent],
    imports: [
        CommonModule,
        OpeningHoursRoutingModule,
        PoPageModule,
        PoLoadingModule,
        ReactiveFormsModule,
        PoFieldModule,
    ],
})
export class OpeningHoursModule {
}
