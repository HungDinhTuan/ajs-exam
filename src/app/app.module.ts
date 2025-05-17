import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {CardGridComponent} from './componets/card-gird/card-gird.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CardGridComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


