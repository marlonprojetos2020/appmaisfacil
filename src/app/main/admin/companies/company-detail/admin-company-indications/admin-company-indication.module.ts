import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoButtonModule, PoContainerModule, PoFieldModule, PoPageModule} from '@po-ui/ng-components';
import {AdminCompanyIndicationComponent} from './admin-company-indication/admin-company-indication.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [CommonModule, PoPageModule, PoContainerModule, PoFieldModule, ReactiveFormsModule, PoButtonModule],
    declarations: [AdminCompanyIndicationComponent],
})
export class AdminCompanyIndicationModule {
}
