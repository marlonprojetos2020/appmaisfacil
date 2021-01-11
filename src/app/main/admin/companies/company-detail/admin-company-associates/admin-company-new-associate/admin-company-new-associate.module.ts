import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCompanyNewAssociateComponent } from './admin-company-new-associate/admin-company-new-associate.component';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoPageModule,
} from '@po-ui/ng-components';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        PoFieldModule,
        PoButtonModule,
    ],
    declarations: [AdminCompanyNewAssociateComponent],
})
export class AdminCompanyNewAssociateModule {}
