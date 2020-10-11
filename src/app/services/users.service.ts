import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from "../../model/user.model";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get <User[]> (`${environment.urlApi}/users`)
  }

  createUser(user: User){
    return this.http.post(`${environment.urlApi}/users`, user).subscribe(
      (response) => {
        console.log (response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
