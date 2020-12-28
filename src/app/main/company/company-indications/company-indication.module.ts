import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoContainerModule, PoPageModule} from '@po-ui/ng-components';
import {CompanyIndicationComponent} from './company-indication/company-indication.component';

@NgModule({
    imports:[CommonModule, PoPageModule, PoContainerModule],
    declarations: [CompanyIndicationComponent],
})
export class CompanyIndicationModule{}
