import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCompanyEditAssociateComponent } from './admin-company-edit-associate/admin-company-edit-associate.component';
import { PoPageModule } from '@po-ui/ng-components';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [AdminCompanyEditAssociateComponent],
})
export class AdminCompanyEditAssociateModule {}
