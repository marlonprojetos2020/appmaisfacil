import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarEditComponent } from './avatar-edit/avatar-edit.component';
import {PoAvatarModule, PoButtonModule, PoFieldModule, PoModalModule} from '@po-ui/ng-components';



@NgModule({
    declarations: [AvatarEditComponent],
    exports: [
        AvatarEditComponent
    ],
    imports: [
        CommonModule,
        PoAvatarModule,
        PoFieldModule,
        PoButtonModule,
        PoModalModule
    ]
})
export class AvatarEditModule { }
