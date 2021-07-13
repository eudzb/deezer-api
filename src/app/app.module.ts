import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import {HttpClientModule} from '@angular/common/http';
import { ListGenresComponent } from './components/list-genres/list-genres.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ListGenresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
