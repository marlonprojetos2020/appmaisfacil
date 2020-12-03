import {BrowserModule} from '@angular/platform-browser';
import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PoModule} from '@po-ui/ng-components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import {HeaderModule} from './core/header/header.module';


registerLocaleData(ptBr);

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        PoModule,
        HeaderModule,
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'pt-BR',
        },
        {
            provide: DEFAULT_CURRENCY_CODE,
            useValue: 'BRL',
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
