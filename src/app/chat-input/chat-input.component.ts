import { Component, OnInit } from '@angular/core';
import { JesiService } from '../jesi.service';

@Component({
  selector: 'etl-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  constructor(private jesi: JesiService) { }

  send(text: string) {
    this.jesi.send(text);
  }
}
