import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyNewComponent } from './company-new/company-new.component';
import { PoContainerModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';
import { PoStepperModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [CompanyNewComponent],
    imports: [
        CommonModule,
        PoPageModule,
        ReactiveFormsModule,
        PoContainerModule,
        PoStepperModule,
        PoFieldModule,
        PoButtonModule,
    ],
    exports: [CompanyNewComponent],
})

export class CompanyNewModule {}
