import { Component, Input } from '@angular/core';

@Component({
  selector: 'etl-server-entry',
  templateUrl: './server-entry.component.html',
  styleUrls: ['./server-entry.component.css']
})
export class ServerEntryComponent {
  @Input() server: string = '';
  constructor() { }
}
