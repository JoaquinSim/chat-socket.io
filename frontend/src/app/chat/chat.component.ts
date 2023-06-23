import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  //newMessage$: Observable<string>;
  messages: string[] =[];

  constructor(private chatService: ChatService){

  }
  ngOnInit() {
    return this.chatService.getNewMessage().subscribe((message: string)=>{
      this.messages.push(message);
    })
  }
  onSubmit(){}
}
