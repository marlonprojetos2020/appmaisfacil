import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SellerListComponent} from './seller-list/seller-list.component';
import {SellerNewComponent} from './seller-new/seller-new.component';
import {SellerEditComponent} from './seller-edit/seller-edit.component';
import {SellerRoutingModule} from './seller-routing.module';
import {PageDatatableModule} from '../../../shared/component/page-datatable/page-datatable.module';
import {UsersFormModule} from '../users/components/users-form/users-form.module';
import { SellerDetailComponent } from './seller-detail/seller-detail.component';
import {UsersModule} from '../users/users.module';


@NgModule({
    declarations: [SellerListComponent, SellerNewComponent, SellerEditComponent, SellerDetailComponent],
    imports: [
        CommonModule,
        SellerRoutingModule,
        PageDatatableModule,
        UsersFormModule,
        UsersModule,
    ],
})
export class SellerModule {
}
