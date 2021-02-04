import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './client-form/client-form.component';
import { PoButtonModule, PoFieldModule } from '@po-ui/ng-components';
import { InvalidFeedbackModule } from '../invalid-feedback/invalid-feedback.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PoButtonModule,
        InvalidFeedbackModule,
        PoFieldModule,
        ReactiveFormsModule,
    ],
    exports: [ClientFormComponent],
    declarations: [ClientFormComponent],
})
export class ClientFormModule {}
