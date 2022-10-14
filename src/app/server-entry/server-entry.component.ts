import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BufferEntry } from '../buffer-entry/buffer-entry.component';

@Component({
  selector: 'etl-server-entry',
  templateUrl: './server-entry.component.html',
  styleUrls: ['./server-entry.component.css']
})
export class ServerEntryComponent {
  @Input() server: string = '';
  @Output() selectedEvent = new EventEmitter<BufferEntry>();
  constructor() { }

  serverSelected() {
    this.selectedEvent.emit({server: this.server, name: ''});
  }
}
