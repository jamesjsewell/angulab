import { Component } from '@angular/core';
import { Joke } from '../../constants'
import { FlashMessageService } from '../../../services/flash-message.service';

@Component({
  selector: 'favorite-jokes',
  templateUrl: './favorite-jokes.component.html',
  styleUrls: ['./favorite-jokes.component.scss'],
})
export class FavoriteJokesComponent {

  favorites: Joke[] = []

  constructor(private flashMessageService: FlashMessageService) {

  }

  ngOnInit() {

    this.favorites = this.getFavorites()

  }

  private getFavorites(): [] | Joke[] {
    let favoritesString = localStorage.getItem('favorite_jokes');
    if(!favoritesString) return []
    return JSON.parse(favoritesString);   
  }

}
