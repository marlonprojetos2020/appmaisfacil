import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {AdminCompanyIndicationComponent} from './admin-company-indication/admin-company-indication.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [AdminCompanyIndicationComponent],
})
export class AdminCompanyIndicationModule{}
