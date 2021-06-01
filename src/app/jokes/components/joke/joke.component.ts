import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from '../../constants';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent {
  @Input() id = '';
  @Input() setup = '';
  @Input() delivery = '';
  @Input() category = '';
  @Output() fetchNextJoke: EventEmitter<any> = new EventEmitter();

  deliveryIsVisible = false;
  favorited = false;

  ngOnInit() {
    const favorites = this.getFavorites()
    const favorite = favorites.find((fav: any)=>fav.id === this.id)
    if(!favorite || (favorite && !favorite.id)) return
    this.favorited = true;
  }

  showDelivery(): void {
    this.deliveryIsVisible = true;
  }

  getNextJoke(): void {
    this.fetchNextJoke.emit();
  }

  addToFavorites(): void {
    if(this.favorited) return
    let favoritesString = localStorage.getItem('favorite_jokes');
    let favorites = this.getFavorites()
    if (favoritesString) {
      favorites = JSON.parse(favoritesString);
    }
    favorites = [
      ...favorites,
      { id: this.id, category: this.category, setup: this.setup, delivery: this.delivery },
    ];
    localStorage.setItem(
      'favorite_jokes',
      JSON.stringify(favorites)
    );
    this.favorited = true;
  }

  private getFavorites(): [] | Joke[] {
    let favoritesString = localStorage.getItem('favorite_jokes');
    if(!favoritesString) return []
    return JSON.parse(favoritesString);   
  }
}
