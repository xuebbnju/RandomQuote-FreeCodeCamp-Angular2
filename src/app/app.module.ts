import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {JsonpModule} from "@angular/http";

import { AppComponent } from './app.component';
import{GetQuoteService} from './getquote.service';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [GetQuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
