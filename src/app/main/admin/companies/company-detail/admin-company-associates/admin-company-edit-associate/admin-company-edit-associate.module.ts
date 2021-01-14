import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageModule } from '@po-ui/ng-components';
import { AdminCompanyEditAssociateComponent } from './admin-company-edit-associate/admin-company-edit-associate.component';
import { AssociateFormModule } from 'src/app/shared/components/associate-form/associate-form.module';
import { AdminCompanyEditAssociateService } from './admin-company-edit-associate.service';

@NgModule({
    imports: [
        CommonModule,
        AssociateFormModule,
        PoPageModule,
    ],
    declarations: [AdminCompanyEditAssociateComponent],
    providers: [AdminCompanyEditAssociateService],
})
export class AdminCompanyEditAssociateModule {}
