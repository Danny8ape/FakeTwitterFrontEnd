import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from 'src/model/tweet.model';
import { TweetsInfoService } from '../services/tweets-info.service';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent implements OnInit {

  listaTweets: Observable<Tweet[]>;
  
  constructor(private TweetsInfoService: TweetsInfoService) {}

  ngOnInit(): void {
    this.llenarListaTweets ();
  }
  llenarListaTweets (): void {
    this.listaTweets = this.TweetsInfoService.getAllPost();
  }
}
