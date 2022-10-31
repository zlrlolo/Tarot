import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeskBackGroundComponent } from './desk-back-ground/desk-back-ground.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DeskBackGroundComponent
  ],
    imports: [
        BrowserModule,
        MatButtonToggleModule,
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
