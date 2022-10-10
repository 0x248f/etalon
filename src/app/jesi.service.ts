import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

export interface JesiMessage {
  time: string
  command: string
  server: string
  channel: string
  user: string
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class JesiService {
  private socket$: WebSocketSubject<any> = webSocket({
    url: 'ws://localhost:4222',
    deserializer: msg => msg
  });
  public messages$ = new Subject<JesiMessage>();
  constructor() {
    this.socket$.subscribe((message: MessageEvent<any>) => {
      let jm: JesiMessage | null = this.parseMessage(message.data);
      if (jm === null)
        return;
      
      this.messages$.next(jm);
    });
  }
  send(text: string) {
    this.socket$.next(text);
    let jm = this.parseMessage(text);
    if (jm === null)
      return;
    this.messages$.next(jm);
  }
  close() {
    this.socket$.complete();
  }

  parseMessage(message: String): JesiMessage | null {
    console.log(message);
    let date = new Date();
    let m = message.trim().match(/^([A-Z]+)\s+\'(.+)\'(?:\.(#[^\.\s]+))?(?:\.([^\.\s]+))?(?:\s*\|\s*(.+))?$/);
    if (m)
      return {
        'time': date.getHours() + ':' + date.getMinutes(),
        'command': m[1],
        'server': m[2],
        'channel': m[3],
        'user': m[4],
        'content': m[5]
      };
    else
      return null;
    }
}
