import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JesiService } from '../jesi.service';

export interface BufferEntry {
  server: string,
  name: string
}

@Component({
  selector: 'etl-buffer-entry',
  templateUrl: './buffer-entry.component.html',
  styleUrls: ['./buffer-entry.component.css']
})
export class BufferEntryComponent {
  @Input() bufferEntry: BufferEntry | undefined;
  @Output() selectedEvent = new EventEmitter<BufferEntry>();
  constructor(private jesi: JesiService) { }

  selectBuffer() {
    if (this.bufferEntry)
      this.selectedEvent.emit(this.bufferEntry);
  }
}
