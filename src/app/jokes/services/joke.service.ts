import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, tap } from 'rxjs/operators';
import { Joke } from '../constants';
import { AjaxStateService } from '../../services/ajax-state.service'

const JOKE_URL =
  'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?safe-mode&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  jokeUrl = JOKE_URL;

  constructor(private http: HttpClient, private ajaxStateService: AjaxStateService) {}

  getJoke(): Observable<{}> {
    this.ajaxStateService.fetching = true
    return this.http
      .get(this.jokeUrl)
      .pipe(
        filter((joke: any)=>!!joke || !!joke.id),
        tap(_joke=>{
          this.ajaxStateService.fetching = false
        }),
        catchError(this.handleError<Joke>('getJoke'))
        
        );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    //this.ajaxStateService.fetching = false
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
