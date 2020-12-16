import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyFormModule } from '../shared/company-form/company-form.module';


@NgModule({
    declarations: [CompanyEditComponent],
    imports: [
        CommonModule,
        CompanyFormModule],
    exports: [CompanyEditComponent],

})
export class CompanyEditModule {}
