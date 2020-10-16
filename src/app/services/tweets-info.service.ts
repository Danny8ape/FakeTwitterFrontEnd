import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tweet } from 'src/model/tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetsInfoService {

  constructor(private http: HttpClient) {}

    
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
  }

