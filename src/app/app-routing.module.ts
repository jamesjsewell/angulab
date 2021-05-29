import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'animals',
    loadChildren: () =>
      import('./animals/animals.module').then((m) => m.AnimalsModule),
  },
  {
    path: 'jokes',
    loadChildren: () =>
      import('./jokes/jokes.module').then((m) => m.JokesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
