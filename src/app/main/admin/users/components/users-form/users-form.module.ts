import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersFormComponent} from './users-form.component';
import {PoDividerModule, PoFieldModule, PoLoadingModule, PoPageModule} from '@po-ui/ng-components';
import {ReactiveFormsModule} from '@angular/forms';
import {FormModule} from '../../../../../shared/component/form/form.module';
import {StoreFormComponent} from './store-form/store-form.component';

@NgModule({
    declarations: [UsersFormComponent, StoreFormComponent],
    imports: [
        CommonModule,
        PoPageModule,
        PoLoadingModule,
        PoDividerModule,
        PoFieldModule,
        ReactiveFormsModule,
        FormModule,
    ],
    exports: [
        UsersFormComponent,
    ],
})
export class UsersFormModule {
}
