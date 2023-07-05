import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../services/chat.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  @ViewChild('form') form: NgForm | any;
  newMessage$: Observable<string> | any;
  messages: string[] =[];

  constructor(private chatService: ChatService){

  }
  ngOnInit() { 
    return this.chatService.getNewMessage().subscribe((message: string)=>{
      this.messages.push(message);
    })
   
  }
  onSubmit(){
    const {message} = this.form.value;
    console.log('Desde componente: '+ message);    
    if(!message) return;
    this.chatService.sendMessage(message);
    this.form.reset();
  }
}
