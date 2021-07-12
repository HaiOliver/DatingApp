import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // need to render on browser
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // bootstrap add Brownser Amination
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
