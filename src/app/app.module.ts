import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//MATERIAL IMPORTS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import { TweetsListComponent } from './tweets-list/tweets-list.component';
import { TweetComponent } from './tweet/tweet.component'; 
import {MatCardModule} from '@angular/material/card';
import { CreateTweetComponent } from './create-tweet/create-tweet.component'; 


@NgModule({
  declarations: [
    AppComponent,
    TweetsListComponent,
    TweetComponent,
    CreateTweetComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
