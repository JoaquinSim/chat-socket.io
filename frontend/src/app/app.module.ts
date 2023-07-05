import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';


const config: SocketIoConfig = {
  //cuando este en red cambiar local host a la direcion ip local
   url: 'http://localhost:3000',
   options:{
    transports:['polling', 'websocket']
   }
 };

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
