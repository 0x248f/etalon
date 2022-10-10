import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { JesiMessage, JesiService } from '../jesi.service';

@Component({
  selector: 'etl-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent {
  public messages: JesiMessage[] = [];
  constructor(public jesi: JesiService) {
    jesi.messages$.subscribe(this.addMessage);
  }
  addMessage(message: JesiMessage) {
    console.log(message);
    this.messages.push(message);
  }
}
