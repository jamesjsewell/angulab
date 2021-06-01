import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './components/jokes.component'
import { FavoriteJokesComponent } from './components/favorite-jokes/favorite-jokes.component'

const routes: Routes = [{
  path: 'random',
  component: JokesComponent
},
{
  path: 'favorites',
  component: FavoriteJokesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesRoutingModule { }
