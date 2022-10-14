import { Component } from '@angular/core';
import { BufferEntry } from './buffer-entry/buffer-entry.component';

@Component({
  selector: 'etl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'etalon';
  bufferEntry: BufferEntry | undefined;

  bufferSelected(bufferEntry: BufferEntry) {
    this.bufferEntry = bufferEntry;
  }
}
