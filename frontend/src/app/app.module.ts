import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { QuizComponent } from './components/quiz/quiz.component';
import { FinishComponent } from './components/finish/finish.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
