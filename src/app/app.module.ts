import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlashMessageComponent } from './components/flash-message/flash-message.component'
import { AjaxSpinnerComponent } from './components/ajax-spinner/ajax-spinner.component'

@NgModule({
  declarations: [
    AppComponent,
    FlashMessageComponent,
    AjaxSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
