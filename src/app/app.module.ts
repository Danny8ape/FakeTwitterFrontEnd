import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

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

//SERVICES
import { TweetsInfoService } from "./services/tweets-info.service";
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetsListComponent,
    TweetComponent,
    CreateTweetComponent,
    CreateUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatCardModule
  ],
  providers: [TweetsInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
