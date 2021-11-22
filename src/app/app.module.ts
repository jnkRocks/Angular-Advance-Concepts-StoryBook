import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { NewService } from './demo/services/new-service.service';
import { OldService } from './demo/services/old-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: NewService, useExisting: OldService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
