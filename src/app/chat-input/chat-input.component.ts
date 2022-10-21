import { Component, Input } from '@angular/core';
import { BufferEntry } from '../buffer-entry/buffer-entry.component';
import { JesiService } from '../jesi.service';

@Component({
  selector: 'etl-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent {
  @Input() bufferEntry: BufferEntry | undefined;
  history: string[] = [];
  historyIndex: number = 0;
  constructor(private jesi: JesiService) { }

  send(textInput: HTMLInputElement) {
    if (!this.bufferEntry)
      return;

    let msg = '';
    let server = this.bufferEntry.server;
    let name = this.bufferEntry.name;
    if (name) {
      msg = `SEND '${server}'.${name} | ${textInput.value}`;
    } else {
      let words = textInput.value.split(' ');
      if (words[0] === 'JOIN')
        msg = `JOIN '${server}'.${words[1]}`;
      else
        msg = `${words[0]} ${server} | ${words.slice(1).join(' ')}`;
    }
    console.log(msg);
    this.jesi.send(msg);

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
