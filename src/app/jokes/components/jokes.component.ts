import { Component } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { switchMap, filter } from 'rxjs/operators'
import { of } from 'rxjs'

import { Joke } from '../constants'
import { debug, RxJsLoggingLevel } from '../../util/rxjs-logging'

@Component({
  selector: 'jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent {
  constructor(private jokeService: JokeService) {
    this.getJoke();
  }

  private getJoke(): void {
    this.jokeService
      .getJoke()
      .pipe(
        debug(RxJsLoggingLevel.DEBUG, 'get joke result'),
        filter((joke: any)=>!!joke && !!joke.category && !!joke.setup && !!joke.delivery),
        switchMap((joke: Joke)=>{
          const { category, setup, delivery } = joke
          return of({category, setup, delivery})
        })
      )
      .subscribe((joke) => {
        console.log(joke);
      });
  }
}
