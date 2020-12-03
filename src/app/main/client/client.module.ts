import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { RouterModule } from '@angular/router';
import { PoToolbarModule } from '@po-ui/ng-components';

@NgModule({
    declarations: [
        ClientLayoutComponent,
    ],
    imports: [
        CommonModule,
        ClientRoutingModule,
        PoToolbarModule,
    ],
    exports: [],
    providers: [],
})
export class ClientModule {}
