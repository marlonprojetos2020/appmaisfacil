import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCompanyNewAssociateComponent } from './admin-company-new-associate/admin-company-new-associate.component';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoNotificationModule,
    PoPageModule,
    PoStepperModule,
} from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';
import { InvalidFeedbackModule } from '../../../../../../shared/components/invalid-feedback/invalid-feedback.module';
import { PhotosGalleryModule } from 'src/app/shared/components/photos-gallery/photos-gallery.module';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        PoFieldModule,
        PoButtonModule,
        ReactiveFormsModule,
        PoNotificationModule,
        PoStepperModule,
        InvalidFeedbackModule,
        PhotosGalleryModule,

    ],
    declarations: [AdminCompanyNewAssociateComponent],
})
export class AdminCompanyNewAssociateModule {}
