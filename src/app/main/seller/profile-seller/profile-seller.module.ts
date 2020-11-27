import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSellerComponent } from './profile-seller/profile-seller.component';
import {ProfileAdminModule} from '../../admin/profile-admin/profile-admin.module';
import {ProfileSellerRoutingModule} from './profile-seller-routing.module';

@NgModule({
  declarations: [ProfileSellerComponent],
    imports: [
        CommonModule,
        ProfileSellerRoutingModule,
        ProfileAdminModule,
    ],
})
export class ProfileSellerModule { }
