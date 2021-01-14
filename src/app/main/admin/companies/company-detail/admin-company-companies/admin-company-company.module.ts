import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoContainerModule,
    PoFieldModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { AdminCompanyCompanyComponent } from './admin-company-company/admin-company-company.component';
import { CompanyFormModule } from '../../shared/company-form/company-form.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        CompanyFormModule,
        PoContainerModule,
        PoFieldModule,
        ReactiveFormsModule,
    ],
    declarations: [AdminCompanyCompanyComponent],
})
export class AdminCompanyCompanyModule {}
