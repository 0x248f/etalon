import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { MessageComponent } from './message/message.component';
import { ServerListComponent } from './server-list/server-list.component';
import { ServerEntryComponent } from './server-entry/server-entry.component';
import { BufferEntryComponent } from './buffer-entry/buffer-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatViewComponent,
    ChatAreaComponent,
    ChatInputComponent,
    MessageComponent,
    ServerListComponent,
    ServerEntryComponent,
    BufferEntryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
