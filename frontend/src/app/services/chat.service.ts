import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ChatService {
    count = 0;
    constructor(private socket: Socket) { }
    activeUsers() {
        console.log(this.socket.connect());
    }


    sendMessage(message: string): void {
        this.socket.emit('sendMessage', message)
        console.log('Desde servicio: ' + message);
    }

    getNewMessage(): Observable<string> {
        return this.socket.fromEvent<string>('newMessage')
    }

    // joinRoom(room: string): void {
    //     this.socket.emit('joinRoom', room);
    // }

    // sendMessageRoom(room: string, message: string): void {
    //     this.socket.emit('message', { room, message });
    // }
}