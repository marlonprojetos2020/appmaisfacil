import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreNewComponent} from './store-new/store-new.component';
import {StoreRoutingModule} from './store-routing.module';
import {StoreListComponent} from './store-list/store-list.component';
import {StoreEditComponent} from './store-edit/store-edit.component';
import {PageDatatableModule} from '../../../shared/component/page-datatable/page-datatable.module';
import {UsersFormModule} from '../users/components/users-form/users-form.module';
import {StoreDetailComponent} from './store-detail/store-detail.component';
import {PoPageModule} from '@po-ui/ng-components';
import {AvatarEditModule} from '../../../shared/component/avatar-edit/avatar-edit.module';
import {UsersModule} from '../users/users.module';

@NgModule({
    declarations: [StoreNewComponent, StoreListComponent, StoreEditComponent, StoreDetailComponent],
    imports: [
        CommonModule,
        StoreRoutingModule,
        PageDatatableModule,
        UsersFormModule,
        PoPageModule,
        AvatarEditModule,
        UsersModule,
    ],
})
export class StoreModule {
}
