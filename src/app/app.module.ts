import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivechatComponent } from './livechat/livechat.component';
import { LoginComponent } from './login/login.component';
import { WebSocketService } from './web-socket.service';
import { FormsModule } from '@angular/forms';
import { SharedUserService } from './shared-user.service';

@NgModule({
  declarations: [
    AppComponent,
    LivechatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WebSocketService, SharedUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
