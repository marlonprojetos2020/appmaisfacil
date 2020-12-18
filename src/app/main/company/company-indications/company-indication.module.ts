import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {CompanyIndicationComponent} from './company-indication/company-indication.component';

@NgModule({
    imports:[CommonModule, PoPageModule],
    declarations: [CompanyIndicationComponent],
})
export class CompanyIndicationModule{}
