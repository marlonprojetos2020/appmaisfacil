import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {CompanyCompanyComponent} from './company-company/company-company.component';


@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [CompanyCompanyComponent],
})
export class CompanyCompanyModule {}
