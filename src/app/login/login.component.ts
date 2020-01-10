import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { SharedUserService } from '../shared-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[WebSocketService, SharedUserService]
})
export class LoginComponent implements OnInit {

  user: string;
  
  constructor(private sharedUserService: SharedUserService) {

  }

  sendUser() {
    this.sharedUserService.getUser(this.user);
    this.user = '';
  }

  ngOnInit(): void {
  
  }

}
