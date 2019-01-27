import { Observable } from 'rxjs';
import { Message } from '../model/message';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SocketService } from '../services/socket.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  messageControl: FormControl = new FormControl('', Validators.required);
  userNameControl: FormControl = new FormControl('', Validators.required);
  updateSub: Subscription;
  messages: Observable<Array<Message>>;
  constructor(private socketSvc: SocketService) { }


  ngOnInit() {
    this.messages = this.socketSvc.getMessages();
    this.updateSub = this.socketSvc.initSocket()
    .subscribe(value => {
      console.log('notified');
      this.messages = this.socketSvc.getMessages();
    });

  }

  sendMessage() {
    this.socketSvc.
    postMessage(this.userNameControl.value, this.messageControl.value)
    .subscribe(val => console.log(val));
  }
}
