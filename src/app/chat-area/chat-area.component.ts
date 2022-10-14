import { Component, Input, OnChanges } from '@angular/core';
import { BufferEntry } from '../buffer-entry/buffer-entry.component';
import { JesiMessage, JesiService } from '../jesi.service';

@Component({
  selector: 'etl-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.css']
})
export class ChatAreaComponent implements OnChanges {
  @Input() bufferEntry: BufferEntry | undefined;
  buffers: {[key: string]: JesiMessage[]} = {};
  messages: JesiMessage[] = [];
  constructor(public jesi: JesiService) {
    this.jesi.message$.subscribe(this.addMessage.bind(this));
  }

  makeKey(server: string | undefined, channel: string | undefined): string {
    let key = '';
    if (server)
      key += server;
    if (channel)
      key += '.' + channel;
    return key;
  }

  addMessage(message: JesiMessage) {
    console.log(message);

    let key = this.makeKey(message.server, message.channel);
    if (!this.buffers[key])
      this.buffers[key] = [];

    this.buffers[key].push(message);
  }

  ngOnChanges() {
    this.messages = this.buffers[this.makeKey(this.bufferEntry?.server, this.bufferEntry?.name)];
  }
}
