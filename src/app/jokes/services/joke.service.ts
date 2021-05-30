import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Joke } from '../constants';

const JOKE_URL =
  'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  jokeUrl = JOKE_URL;

  constructor(private http: HttpClient) {}

  getJoke(): Observable<{}> {
    return this.http
      .get(this.jokeUrl)
      .pipe(catchError(this.handleError<Joke>('getJoke')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
