import { NgModule } from '@angular/core';

import { JokesRoutingModule } from './jokes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { JokesComponent } from './components/jokes.component'
import { JokeComponent } from './components/joke/joke.component'
import { FavoriteJokesComponent } from './components/favorite-jokes/favorite-jokes.component';


@NgModule({
  declarations: [JokesComponent, JokeComponent, FavoriteJokesComponent],
  imports: [
    JokesRoutingModule,
    SharedModule
  ]
})
export class JokesModule { }
