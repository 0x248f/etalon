import { Component, EventEmitter, Output } from '@angular/core';
import { JesiService, JesiMessage } from '../jesi.service';
import { BufferEntry } from '../buffer-entry/buffer-entry.component';

@Component({
  selector: 'etl-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent {
  servers: string[] = [];
  buffers: {[server: string]: string[]} = {};
  @Output() selectedEvent = new EventEmitter<BufferEntry>();
  constructor(public jesi: JesiService) {
    jesi.message$.subscribe((message: JesiMessage) => {
      if (message.command === 'CONNECT') {
        this.servers.push(message.server);
      }
      if (message.command === 'JOIN') {
        if (this.buffers[message.server]) {
          this.buffers[message.server].push(message.channel || message.user);
        } else {
          this.buffers[message.server] = [message.channel || message.user];
        }
      }
    });
  }

  bufferSelected(bufferEntry: BufferEntry) {
    this.selectedEvent.emit(bufferEntry);
  }
}
