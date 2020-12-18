import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoContainerModule, PoPageModule} from '@po-ui/ng-components';
import {CompanyExtraServiceComponent} from './company-extra-service/company-extra-service.component';

@NgModule({
    imports: [CommonModule, PoPageModule, PoContainerModule],
    declarations: [CompanyExtraServiceComponent],
})
export class CompanyExtraServiceModule{}
