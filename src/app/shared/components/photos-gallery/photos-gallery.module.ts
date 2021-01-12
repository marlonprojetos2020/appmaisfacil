import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule, PoDividerModule } from '@po-ui/ng-components';
import { PhotosGalleryComponent } from './photos-gallery/photos-gallery.component'
import { InvalidFeedbackModule } from '../invalid-feedback/invalid-feedback.module';

@NgModule({
    declarations: [PhotosGalleryComponent],
    imports: [
        CommonModule,
        PoButtonModule,
        PoDividerModule,
        InvalidFeedbackModule
    ],
    exports: [PhotosGalleryComponent]
})
export class PageDatatableModule {
}
