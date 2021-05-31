import { Component } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { switchMap, filter } from 'rxjs/operators'
import { of } from 'rxjs'

import { Joke } from '../constants'
import { debug, RxJsLoggingLevel } from '../../util/rxjs-logging'
import { FlashMessageService } from 'src/app/services/flash-message.service';
import { FlashMessageTypes } from 'src/app/constants';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent {
  constructor(private jokeService: JokeService, private flashMessageService: FlashMessageService) {
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
  addMessage(){
    this.flashMessageService.addMessage({id: uuid(), message: 'test', type: FlashMessageTypes.SUCCESS})
  }
}
