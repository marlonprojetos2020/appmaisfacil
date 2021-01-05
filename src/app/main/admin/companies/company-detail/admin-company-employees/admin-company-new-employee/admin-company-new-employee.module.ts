import {NgModule} from '@angular/core';
import {AdminCompanyNewEmployeeComponent} from './admin-company-new-employee/admin-company-new-employee.component';
import {CommonModule} from '@angular/common';
import {PoContainerModule, PoFieldModule, PoPageModule} from '@po-ui/ng-components';

@NgModule({
    declarations: [AdminCompanyNewEmployeeComponent],
    imports: [CommonModule, PoPageModule, PoContainerModule, PoFieldModule],
})
export class AdminCompanyNewEmployeeModule {
}
