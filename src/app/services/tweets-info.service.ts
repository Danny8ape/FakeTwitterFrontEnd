import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tweet } from 'src/model/tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetsInfoService {
  listaTweetsService: Array<Tweet>;

  constructor(private http: HttpClient) {
    this.listaTweetsService = new Array<Tweet>();
  }

   
  getAllPost(): Observable<Tweet[]>{
    return this.http.get <Tweet[]> (`${environment.urlApi}/post`);
  }

  createPost( tweet: Tweet ){
    return this.http.post(`${environment.urlApi}/post`, tweet).subscribe(
      (response) => {
        console.log (response);
      },
      error => {
        console.log(error);
      }
    );
  }

  crearTweet(nuevoTweet: Tweet) {
    this.listaTweetsService.push(nuevoTweet);
    console.log(this.listaTweetsService);
  }

  traerTweets (){ 
    let tweet = new Tweet ();
    tweet.author = "Danny";
    tweet.idPost = 1;
    tweet.location = 'Bogotá';
    tweet.device = 'Android';
    tweet.published_date = new Date();
    tweet.message = 'Io';

    

    let tweet2 = new Tweet ();
    tweet2.author = "Danny";
    tweet2.idPost = 2;
    tweet2.location = 'Bogotá';
    tweet2.device = 'Android';
    tweet2.published_date = new Date();
    tweet2.message = 'Io';


    let tweet3 = new Tweet ();
    tweet3.author = "Danny";
    tweet3.idPost = 3;
    tweet3.location = 'Bogotá';
    tweet3.device = 'Android';
    tweet3.published_date = new Date();
    tweet3.message = 'Io3';
    
    this.listaTweetsService.push (tweet);
    this.listaTweetsService.push (tweet2);
    this.listaTweetsService.push (tweet3);

    return this.listaTweetsService;
  
  }
  }

