import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Chapter4Component } from './chapter4/chapter4.component';


@NgModule({
  declarations: [
    AppComponent,
    Chapter4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,Chapter4Component]
})
export class AppModule { }
