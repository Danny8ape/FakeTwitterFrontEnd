import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/model/tweet.model';
import { TweetsInfoService } from '../services/tweets-info.service';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent implements OnInit {

  listaTweets: Array<Tweet>;
  
  constructor(private TweetsInfoService: TweetsInfoService) { 
    this.listaTweets = new Array <Tweet> ();

  }

  ngOnInit(): void {
    this.llenarListaTweets ();
  }
  llenarListaTweets (): void {
    this.listaTweets = this.TweetsInfoService.traerTweets ();
  }
}
