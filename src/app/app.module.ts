import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {DatePipe} from "@angular/common";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        ProductListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot([
            {path: '', component: ProductListComponent},
        ]),
        BrowserAnimationsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        MatSlideToggleModule,
    ],
    providers: [
        DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
