import { Component, Input } from '@angular/core';
import { JesiMessage } from '../jesi.service';

@Component({
  selector: 'etl-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() message: JesiMessage | undefined;
  constructor() { }
}
