import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {AdminCompanyCompanyComponent} from './admin-company-company/admin-company-company.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [AdminCompanyCompanyComponent],
})
export class AdminCompanyCompanyModule {
}
