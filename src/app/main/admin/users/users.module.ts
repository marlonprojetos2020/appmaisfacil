import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UsersRoutingModule} from './users-routing.module';
import {PageDatatableModule} from '../../../shared/component/page-datatable/page-datatable.module';
import {PoInfoModule, PoPageModule} from '@po-ui/ng-components';
import {UsersNewComponent} from './components/users-new/users-new.component';
import {UsersEditComponent} from './components/users-edit/users-edit.component';
import {UsersFormModule} from './components/users-form/users-form.module';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';
import {AvatarEditModule} from '../../../shared/component/avatar-edit/avatar-edit.module';
import { UsersDetailPageComponent } from './components/users-detail-page/users-detail-page.component';

@NgModule({
    declarations: [
        UsersListComponent,
        UsersNewComponent,
        UsersEditComponent,
        UsersDetailComponent,
        UsersDetailPageComponent,
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        PageDatatableModule,
        PoPageModule,
        UsersFormModule,
        AvatarEditModule,
        PoInfoModule,
    ],
    exports: [
        UsersDetailComponent
    ]
})
export class UsersModule {
}
