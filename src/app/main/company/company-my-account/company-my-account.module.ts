import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyMyAccountComponent} from './company-my-account/company-my-account.component';
import {PoPageModule} from '@po-ui/ng-components';
import {MyAccountFormModule} from '../../../shared/components/my-account-form/my-account-form.module';

@NgModule({
    imports: [
        CommonModule,
        PoPageModule,
        MyAccountFormModule,
    ],
    declarations: [CompanyMyAccountComponent],
    exports: [CompanyMyAccountComponent],
})
export class CompanyMyAccountMoudle {
}
