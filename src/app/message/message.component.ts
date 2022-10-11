import { Component, Input, OnChanges } from '@angular/core';
import { JesiMessage } from '../jesi.service';

@Component({
  selector: 'etl-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() message: JesiMessage | undefined;
  constructor() { }

  ngOnChanges(): void {
    if (this.message) {
      if (!this.message.content) {
        this.message.content = this.message.command;
        if (this.message.channel)
        this.message.content += ' ' + this.message.channel;
      }
      if (!this.message.user)
        this.message.user = this.message.server;
    }
  }
}
