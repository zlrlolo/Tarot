import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeskBackGroundComponent } from './desk-back-ground/desk-back-ground.component';

@NgModule({
  declarations: [
    AppComponent,
    DeskBackGroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
