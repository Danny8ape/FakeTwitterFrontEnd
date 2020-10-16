import { Component, OnInit } from '@angular/core';
import { User } from "../../model/user.model";
import { UsersService } from "../services/users.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  newUser: User;

  constructor(private usersService: UsersService) { 
    this.newUser = new User();
  }

  ngOnInit(): void {
  }

  createUser(){
    this.usersService.createUser (this.newUser);
  }

}
