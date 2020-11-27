import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvalidFeedbackComponent} from './invalid-feedback/invalid-feedback.component';
import { AddressFormComponent } from './address-form/address-form.component';
import {PoDividerModule, PoFieldModule} from '@po-ui/ng-components';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        InvalidFeedbackComponent,
        AddressFormComponent,
    ],
    imports: [
        CommonModule,
        PoFieldModule,
        ReactiveFormsModule,
        PoDividerModule,
    ],
    exports: [
        InvalidFeedbackComponent,
        AddressFormComponent,
    ],
})
export class FormModule {
}
