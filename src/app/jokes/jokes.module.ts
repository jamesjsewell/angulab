import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesRoutingModule } from './jokes-routing.module';
import { JokesComponent } from './components/jokes.component'
import { JokeComponent } from './components/joke/joke.component'
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [JokesComponent, JokeComponent],
  imports: [
    CommonModule,
    JokesRoutingModule,
    SharedModule
  ]
})
export class JokesModule { }
