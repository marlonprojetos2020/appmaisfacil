import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { CompanyNewEmployeeComponent } from './company-new-employee/company-new-employee.component';

@NgModule({
    declarations: [CompanyNewEmployeeComponent],
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        PoFieldModule,
        PoButtonModule,
    ],
})
export class CompanyNewEmployeeModule {}
