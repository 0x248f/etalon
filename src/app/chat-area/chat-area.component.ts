import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { JesiMessage, JesiService } from '../jesi.service';

@Component({
  selector: 'etl-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent implements OnInit {
  messages: JesiMessage[] = [];
  constructor(public jesi: JesiService) {
  }
  ngOnInit() {
    this.jesi.message$.subscribe(this.addMessage.bind(this));
  }
  addMessage(message: JesiMessage) {
    console.log(message);
    if (!this.messages)
      this.messages = [];
    this.messages.push(message);
  }
}
