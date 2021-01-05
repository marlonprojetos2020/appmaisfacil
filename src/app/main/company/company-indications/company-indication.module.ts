import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoButtonModule, PoContainerModule, PoFieldModule, PoPageModule} from '@po-ui/ng-components';
import {CompanyIndicationComponent} from './company-indication/company-indication.component';

@NgModule({
    imports:[CommonModule, PoPageModule, PoContainerModule, PoFieldModule, PoButtonModule],
    declarations: [CompanyIndicationComponent],
})
export class CompanyIndicationModule{}
