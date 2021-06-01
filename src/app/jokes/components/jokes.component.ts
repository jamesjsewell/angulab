import { Component } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { switchMap, filter } from 'rxjs/operators'
import { Observable, of } from 'rxjs'

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

  joke$: Observable<{id: string, category: string, setup: string, delivery: string}>

  constructor(private jokeService: JokeService, private flashMessageService: FlashMessageService) {
    this.joke$ = this.getJoke()
  }

  private getJoke(): Observable<{id: string, category: string, setup: string, delivery: string}> {
    return this.jokeService
    .getJoke()
    .pipe(
      debug(RxJsLoggingLevel.DEBUG, 'get joke result'),
      filter((joke: any)=>!!joke && !!joke.id && !!joke.category && !!joke.setup && !!joke.delivery),
      switchMap((joke: Joke)=>{
        const { id, category, setup, delivery } = joke
        return of({id, category, setup, delivery})
      })
    )
  }

  fetchNextJoke(){
    this.joke$ = this.getJoke()
  }

  addMessage(){
    this.flashMessageService.addMessage({id: uuid(), message: 'test', type: FlashMessageTypes.SUCCESS})
  }
}
