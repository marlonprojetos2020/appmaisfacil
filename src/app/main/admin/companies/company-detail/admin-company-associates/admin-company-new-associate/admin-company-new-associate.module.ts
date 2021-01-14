import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageModule } from '@po-ui/ng-components';
import { AdminCompanyNewAssociateComponent } from './admin-company-new-associate/admin-company-new-associate.component';
import { AssociateFormModule } from 'src/app/shared/components/associate-form/associate-form.module';
@NgModule({
    imports: [
        CommonModule,
        AssociateFormModule,
        PoPageModule,
    ],
    declarations: [AdminCompanyNewAssociateComponent],
})
export class AdminCompanyNewAssociateModule {}
