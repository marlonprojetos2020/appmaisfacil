import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileStoreComponent } from './profile-store/profile-store.component';
import {ProfileAdminModule} from '../../admin/profile-admin/profile-admin.module';
import {ProfileStoreRoutingModule} from './profile-store-routing.module';



@NgModule({
  declarations: [ProfileStoreComponent],
    imports: [
        CommonModule,
        ProfileStoreRoutingModule,
        ProfileAdminModule,
    ],
})
export class ProfileStoreModule { }
