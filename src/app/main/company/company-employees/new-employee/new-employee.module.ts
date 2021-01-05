import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewEmployeeComponent} from './new-employee/new-employee.component';
import {PoButtonModule, PoContainerModule, PoFieldModule, PoPageModule} from '@po-ui/ng-components';

@NgModule({
    imports: [CommonModule, PoPageModule, PoContainerModule, PoFieldModule, PoButtonModule],
    declarations: [NewEmployeeComponent],
})
export class NewEmployeeModule {
}
