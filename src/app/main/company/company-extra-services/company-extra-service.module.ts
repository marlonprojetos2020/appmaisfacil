import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {CompanyExtraServiceComponent} from './company-extra-service/company-extra-service.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [CompanyExtraServiceComponent],
})
export class CompanyExtraServiceModule{}
