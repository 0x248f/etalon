import { Component } from '@angular/core';
import { JesiMessage, JesiService } from '../jesi.service';

@Component({
  selector: 'etl-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent {
  messages: JesiMessage[] = [];
  constructor(public jesi: JesiService) {
    this.jesi.message$.subscribe(this.addMessage.bind(this));
  }

  addMessage(message: JesiMessage) {
    console.log(message);
    if (!this.messages)
      this.messages = [];
    this.messages.push(message);
  }
}
