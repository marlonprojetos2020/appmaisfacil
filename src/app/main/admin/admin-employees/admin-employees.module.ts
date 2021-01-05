import { NgModule } from '@angular/core';
import { AdminEmployerListModule } from './admin-employee-list/admin-employee-list.module';
import { AdminEmployeesRoutingModule } from './admin-employees-routing.module';
import { AdminEmployeesService } from './admin-employees.service';
import {AdminNewEmployeeModule} from './admin-new-employee/admin-new-employee.module';

@NgModule({
    imports: [
        AdminEmployeesRoutingModule,
        AdminEmployerListModule,
        AdminNewEmployeeModule,
    ],
    providers: [AdminEmployeesService],
})
export class AdminEmployeesModule {}
