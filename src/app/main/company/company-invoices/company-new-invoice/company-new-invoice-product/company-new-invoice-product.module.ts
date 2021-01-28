import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyNewInvoiceProductComponent } from './company-new-invoice-product/company-new-invoice-product.component';
import {
    PoButtonModule,
    PoContainerModule,
    PoFieldModule,
    PoModalModule,
    PoPageModule,
    PoStepperModule,
    PoTableModule,
} from '@po-ui/ng-components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        PoStepperModule,
        PoContainerModule,
        PoButtonModule,
        PoTableModule,
        PoModalModule,
        ReactiveFormsModule,
        PoFieldModule,
    ],
    declarations: [CompanyNewInvoiceProductComponent],
})
export class CompanyNewInvoiceProductModule {}
