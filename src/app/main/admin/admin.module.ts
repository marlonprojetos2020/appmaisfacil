import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoMenuModule, PoToolbarModule } from '@po-ui/ng-components';

import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminToolbarComponent } from './admin-layout/admin-toolbar/admin-toolbar.component';
import { AdminMenuComponent } from './admin-layout/admin-menu/admin-menu.component';
import { CompanyDetailMenuComponent } from './admin-layout/company-detail-menu/company-detail-menu.component';
import { AdminMyAccountModule } from './admin-my-account/admin-my-account.module';
import { AdminEmployeeModule } from './admin-employees/admin-employee.module';
import { AdminChargeListModule } from './admin-charges/admin-charge-list.module';
import { AdminBankStatementListModule } from './admin-bank-statements/admin-bank-statement-list.module';
import { AdminInvoiceListModule } from './admin-invoices/admin-invoice-list.module';

@NgModule({
    declarations: [
        AdminToolbarComponent,
        AdminMenuComponent,
        CompanyDetailMenuComponent,
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        PoMenuModule,
        PoToolbarModule,
        AdminDashboardModule,
        AdminMyAccountModule,
        AdminChargeListModule,
        AdminBankStatementListModule,
        AdminInvoiceListModule,
        AdminEmployeeModule,
    ],
    exports: [
        AdminToolbarComponent,
        AdminMenuComponent,
        CompanyDetailMenuComponent,
    ],
})
export class AdminModule {}
