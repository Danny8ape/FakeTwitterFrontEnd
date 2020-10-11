import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tweet } from 'src/model/tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetsInfoService {
  listaTweetsService: Array<Tweet>;

  constructor() {
    this.listaTweetsService = new Array<Tweet>();
   }

   crearTweet(nuevoTweet: Tweet) {
     this.listaTweetsService.push(nuevoTweet);
     console.log(this.listaTweetsService);
   }

  traerTweets (){ 
    let tweet = new Tweet ();
    tweet.author = "Danny";
    tweet.idTweet = 1;
    tweet.location = 'Bogotá';
    tweet.device = 'Android';
    tweet.date = new Date();
    tweet.text = 'Io';

    

    let tweet2 = new Tweet ();
    tweet2.author = "Danny";
    tweet2.idTweet = 2;
    tweet2.location = 'Bogotá';
    tweet2.device = 'Android';
    tweet2.date = new Date();
    tweet2.text = 'Io';


    let tweet3 = new Tweet ();
    tweet3.author = "Danny";
    tweet3.idTweet = 3;
    tweet3.location = 'Bogotá';
    tweet3.device = 'Android';
    tweet3.date = new Date();
    tweet3.text = 'Io3';
    
    this.listaTweetsService.push (tweet);
    this.listaTweetsService.push (tweet2);
    this.listaTweetsService.push (tweet3);

    return this.listaTweetsService;
  
  }
  }

