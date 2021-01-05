import {NgModule} from '@angular/core';
import {AdminNewEmplooyeeComponent} from './admin-new-employee/admin-new-emplooyee.component';
import {CommonModule} from '@angular/common';
import {PoButtonModule, PoContainerModule, PoFieldModule, PoPageModule} from '@po-ui/ng-components';

@NgModule({
    declarations: [AdminNewEmplooyeeComponent],
    imports: [CommonModule, PoPageModule, PoContainerModule, PoFieldModule, PoButtonModule],
})
export class AdminNewEmployeeModule {
}
