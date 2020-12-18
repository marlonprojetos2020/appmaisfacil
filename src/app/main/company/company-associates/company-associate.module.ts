import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {CompanyAssociateComponent} from './company-associate/company-associate.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [CompanyAssociateComponent],
})
export class CompanyAssociateModule{}
