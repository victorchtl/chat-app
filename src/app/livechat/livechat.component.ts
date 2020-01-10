import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { LoginComponent } from '../login/login.component';
import { SharedUserService } from '../shared-user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livechat',
  templateUrl: './livechat.component.html',
  styleUrls: ['./livechat.component.scss'],
  providers:[WebSocketService, SharedUserService]
})
export class LivechatComponent implements OnInit {

  
  user:string = "user";
  message: string;
  messageArray:Array<{user:String,message:String}> = [];
  
  constructor(private webSocketService: WebSocketService) {
    
  }

  sendMessage() {
    this.webSocketService.sendMessage({ user: this.user, message: this.message });
    this.message = '';
  }

  ngOnInit(): void {
    this.webSocketService
      .getMessages()
      .subscribe(data =>
        this.messageArray.push(data)
      );
  }
}
