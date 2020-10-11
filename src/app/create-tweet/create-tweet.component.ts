import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/model/tweet.model';
import { TweetsInfoService } from '../services/tweets-info.service';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.css']
})
export class CreateTweetComponent implements OnInit {
  nuevoTweet: Tweet;
  constructor(private tweetInfoService: TweetsInfoService) {
    this.nuevoTweet = new Tweet();
   }

  ngOnInit(): void {
  }
  crearNuevoTweet (){
    this.tweetInfoService.crearTweet (this.nuevoTweet);
  }
}
