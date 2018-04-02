import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Chapter4Component } from './chapter4/chapter4.component';
import { ImportComponent } from './import/import.component';


@NgModule({
  declarations: [
    AppComponent,
    Chapter4Component,
    ImportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents:[
    ImportComponent
  ],
  providers: [],
  bootstrap: [AppComponent,Chapter4Component]
})
export class AppModule { }
