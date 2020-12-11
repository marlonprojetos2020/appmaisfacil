import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InvalidFeedbackComponent } from './invalid-feedback/invalid-feedback.component';

@NgModule({
    declarations: [InvalidFeedbackComponent],
    imports: [CommonModule],
    exports: [InvalidFeedbackComponent],

})
export class InvalidFeedbackModule {}
