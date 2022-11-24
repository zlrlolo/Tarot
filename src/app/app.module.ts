import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeskBackGroundComponent } from './desk-back-ground/desk-back-ground.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './cards/cards.component';
import {MatButtonModule} from "@angular/material/button";
import { RusultComponent } from './rusult/rusult.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    DeskBackGroundComponent,
    CardsComponent,
    RusultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
