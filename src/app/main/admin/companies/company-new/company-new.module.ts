import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompanyFormModule } from '../shared/company-form/company-form.module';
import { CompanyNewComponent } from './company-new/company-new.component';

@NgModule({
    declarations: [CompanyNewComponent],
    imports: [CommonModule, CompanyFormModule],
    exports: [CompanyNewComponent],
})
export class CompanyNewModule {}
