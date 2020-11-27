import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBankAccountComponent } from './user-bank-account/user-bank-account.component';
import {PoFieldModule, PoLoadingModule, PoPageModule} from '@po-ui/ng-components';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
    declarations: [UserBankAccountComponent],
    exports: [
        UserBankAccountComponent
    ],
    imports: [
        CommonModule,
        PoPageModule,
        PoLoadingModule,
        ReactiveFormsModule,
        PoFieldModule
    ]
})
export class UserBankAccountModule { }
