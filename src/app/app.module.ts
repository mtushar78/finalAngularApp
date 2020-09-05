
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {WebSocketService} from './web-socket.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LightListComponent } from './light-list/light-list.component';
import{ApiCallService} from './api-call.service';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LightListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      {path:'list', component: LightListComponent}     
      
    ]),
    HttpClientModule 
  ],
  exports: [RouterModule],
  providers: [WebSocketService,ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
