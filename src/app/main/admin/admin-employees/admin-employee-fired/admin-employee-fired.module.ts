import { NgModule } from '@angular/core';
import { AdminEmployeeFiredComponent } from './admin-emplyee-fired/admin-employee-fired.component';
import { CommonModule } from '@angular/common';
import { PageDatatableModule } from '../../../../shared/components/page-datatable/page-datatable.module';
import { PoFieldModule, PoModalModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [AdminEmployeeFiredComponent],
    imports: [CommonModule, PageDatatableModule, PoModalModule, PoFieldModule],
})
export class AdminEmployeeFiredModule {}
