import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { CompanyCompanyComponent } from './company-company/company-company.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoFieldModule,
        PoContainerModule,
        PoButtonModule,
        ReactiveFormsModule,
    ],
    declarations: [CompanyCompanyComponent],
})
export class CompanyCompanyModule {}
