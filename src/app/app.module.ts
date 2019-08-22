import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import the routing modules
import { AppRoutingModule } from './app-routing.module';

// mdbootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';
/************************************************************/
/* import primeng Lib*/
import {TableModule} from '../../node_modules/primeng/table';
import {DataViewModule} from '../../node_modules/primeng/dataview';
import {InputTextModule} from '../../node_modules/primeng/inputtext';
import {CalendarModule} from '../../node_modules/primeng/calendar';
import {ButtonModule} from '../../node_modules/primeng/button';
/************************************************************/
import {HttpClientModule} from '@angular/common/http';
import {CustomMaterialModule} from './Core/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// import the components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ServiceComponent } from './service/service.component';
import {WelcomPageComponent} from './WelcomPage/welcom.component';
import { AddTaskComponent } from './AddTask/add-task/add-task.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './Auth/auth.guard';
import { TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    UserComponent,
    ServiceComponent,
    WelcomPageComponent,
    AddTaskComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    DataViewModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    CustomMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule
  ],
  // schemas: [ NO_ERRORS_SCHEMA ],
  // provide the services that other can use
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS , useClass:TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
