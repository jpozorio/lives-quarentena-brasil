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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
