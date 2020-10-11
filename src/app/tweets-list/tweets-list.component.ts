import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from 'src/model/tweet.model';
import { TweetsInfoService } from '../services/tweets-info.service';
import { UsersService } from "../services/users.service";
import { User } from "../../model/user.model"

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent implements OnInit {

  listaTweets: Observable<Tweet[]>;
  listaUsuarios: Observable<User[]>
  
  constructor(private TweetsInfoService: TweetsInfoService, private userService: UsersService) {}

  ngOnInit(): void {
    this.llenarListaTweets ();
    this.llenarListaUsuarios();
  }

  llenarListaUsuarios(): void {
    this.listaUsuarios = this.userService.getAllUsers();
  }

  llenarListaTweets (): void {
    this.listaTweets = this.TweetsInfoService.getAllPost();

    this.listaTweets.forEach(element => {
      console.log("--->", element);
    });  
  }
}
