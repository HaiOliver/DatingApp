import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NavComponent } from './nav/nav.component'
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { SharedModule } from './_module/shared.module';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    // !! ng g c [name] --> component added automatically here
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    MemberCardComponent
  ],
  imports: [
    // !! import here -> use everywhere, modify angular.json -> css style
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // bootstrap add Brownser Amination
    BrowserAnimationsModule,
    FormsModule,
    // !! use ShareModule in Share folder -> clean module app
    SharedModule
  ],

  providers: [
     // !! add error interceptors -> create custom error check
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true},
    // !! add jwt interceptors -> inject jwt -> every request to back end
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
