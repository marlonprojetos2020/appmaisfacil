import { NgModule } from '@angular/core';
import { AdminEmployerListModule } from './admin-employee-list/admin-employee-list.module';
import { AdminEmployeesRoutingModule } from './admin-employees-routing.module';
import { AdminEmployeesService } from './admin-employees.service';

@NgModule({
    imports: [
        AdminEmployeesRoutingModule,
        AdminEmployerListModule,
    ],
    providers: [AdminEmployeesService],
})
export class AdminEmployeesModule {}
