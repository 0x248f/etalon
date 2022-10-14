import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JesiService } from '../jesi.service';

@Component({
  selector: 'etl-buffer-entry',
  templateUrl: './buffer-entry.component.html',
  styleUrls: ['./buffer-entry.component.css']
})
export class BufferEntryComponent {
  @Input() server: string = '';
  @Input() buffer: string = '';
  @Output() selectedEvent = new EventEmitter<boolean>();
  constructor(private jesi: JesiService) { }

  selectBuffer() {
    this.jesi.currentServer = this.server;
    this.jesi.currentBuffer = this.buffer;
  }
}
