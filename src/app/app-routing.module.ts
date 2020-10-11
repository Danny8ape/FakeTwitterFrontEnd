import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTweetComponent } from './create-tweet/create-tweet.component';
import { TweetsListComponent } from './tweets-list/tweets-list.component';
import { CreateUserComponent } from "./create-user/create-user.component";

const routes: Routes = [
  {path: '', redirectTo: 'listaTweets', pathMatch: 'full'},
  {path: 'listaTweets', component: TweetsListComponent},
  {path: 'crearTweet', component: CreateTweetComponent},
  {path: 'crearUsuario', component: CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
