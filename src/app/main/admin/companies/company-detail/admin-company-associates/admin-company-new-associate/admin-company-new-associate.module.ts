import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCompanyNewAssociateComponent } from './admin-company-new-associate/admin-company-new-associate.component';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoNotificationModule,
    PoPageModule,
} from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoContainerModule,
        PoFieldModule,
        PoButtonModule,
        ReactiveFormsModule,
        PoNotificationModule,
    ],
    declarations: [AdminCompanyNewAssociateComponent],
})
export class AdminCompanyNewAssociateModule {}
