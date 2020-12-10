import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyNewComponent } from './company-new/company-new.component';
import { PoPageModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [CompanyNewComponent],
    imports: [
        CommonModule,
        PoPageModule,
    ],
    exports: [CompanyNewComponent],
})

export class CompanyNewModule {}
