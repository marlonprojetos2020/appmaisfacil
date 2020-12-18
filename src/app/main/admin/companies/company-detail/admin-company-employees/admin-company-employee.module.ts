import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoPageModule} from '@po-ui/ng-components';
import {AdminCompanyEmployeeComponent} from './admin-company-employee/admin-company-employee.component';

@NgModule({
    imports: [CommonModule, PoPageModule],
    declarations: [AdminCompanyEmployeeComponent],
})
export class AdminCompanyEmployeeModule {
}
