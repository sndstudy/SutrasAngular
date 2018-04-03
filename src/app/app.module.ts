import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Chapter4Component } from './chapter4/chapter4.component';
import { ImportComponent } from './import/import.component';

import {MY_ROUTES} from './app.routing'


@NgModule({
  declarations: [
    AppComponent,
    Chapter4Component,
    ImportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MY_ROUTES
  ],
  entryComponents:[
    ImportComponent
  ],
  providers: [],
  bootstrap: [AppComponent,Chapter4Component]
})
export class AppModule { }
