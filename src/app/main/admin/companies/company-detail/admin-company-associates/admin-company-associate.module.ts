import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {AdminCompanyAssociateComponent} from './admin-company-associate/admin-company-associate.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [AdminCompanyAssociateComponent],
})
export class AdminCompanyAssociateModule {
}
