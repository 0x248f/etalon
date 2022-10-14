import { Component, Input, OnInit } from '@angular/core';
import { BufferEntry } from '../buffer-entry/buffer-entry.component';

@Component({
  selector: 'etl-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit {
  @Input() bufferEntry: BufferEntry | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
