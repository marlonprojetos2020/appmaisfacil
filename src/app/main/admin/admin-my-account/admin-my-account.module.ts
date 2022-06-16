import { NgModule } from '@angular/core';
import { AdminMyAccountComponent } from './admin-my-account/admin-my-account.component';
import { MyAccountFormModule } from 'src/app/shared/components/my-account-form/my-account-form.module';
import { PoPageModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [AdminMyAccountComponent],
    imports: [
        MyAccountFormModule,
        PoPageModule,
    ],
    exports: [AdminMyAccountComponent],
})
export class AdminMyAccountModule {}
