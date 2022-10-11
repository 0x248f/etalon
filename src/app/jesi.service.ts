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
  private socket$: WebSocketSubject<string> = webSocket<string>({
    url: 'ws://localhost:4222',
    deserializer: msg => msg.data,
    serializer: msg => msg
  });
  public message$ = new Subject<JesiMessage>();

  private nickname: {[key: string]: string} = {};

  constructor() {
    this.socket$.subscribe((value: string) => {
      let jm: JesiMessage | null = this.parseMessage(value);
      if (jm === null)
        return;
      
      this.message$.next(jm);

      if (jm.command == 'NICK')
        this.nickname[jm.server] = jm.user;
    });
  }
  send(text: string) {
    this.socket$.next(text);
    /*let jm = this.parseMessage(text);
    if (jm === null)
      return;
    jm.user = this.nickname[jm.server];
    this.message$.next(jm);*/
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
        'time': date.toLocaleTimeString('ca'),
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
