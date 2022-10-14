import { Component } from '@angular/core';
import { JesiService } from '../jesi.service';

@Component({
  selector: 'etl-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  history: string[] = [];
  historyIndex: number = 0;
  constructor(private jesi: JesiService) { }

  send(textInput: HTMLInputElement) {
    this.jesi.send(textInput.value);
    this.historyIndex = this.history.length + 1;
    this.history.push(textInput.value);
    textInput.value = '';
  }
  historyUp(textInput: HTMLInputElement) {
    if (this.history.length == 0)
      return;

    if (this.historyIndex != 0) {
      this.historyIndex -= 1;
      textInput.value = this.history[this.historyIndex];
    }
  }
  historyDown(textInput: HTMLInputElement) {
    if (this.history.length == 0)
      return;

    if (this.historyIndex < this.history.length - 1) {
      this.historyIndex += 1;
      textInput.value = this.history[this.historyIndex];
    } else {
      this.historyIndex = this.history.length;
      textInput.value = '';
    }
  }
}
