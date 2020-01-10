import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedUserService {

  private socket;

  constructor () {

  }

  public getUser(user) {
    this.socket.emit('user', user);
}

}
