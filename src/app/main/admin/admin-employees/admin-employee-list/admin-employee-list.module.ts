import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEmployeeListComponent } from './admin-employee-list/admin-employee-list.component';
import { PoPageModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [AdminEmployeeListComponent],
    imports: [
        CommonModule,
        PoPageModule,
    ],
    exports: [AdminEmployeeListComponent],
})
export class AdminEmployerListModule {}
