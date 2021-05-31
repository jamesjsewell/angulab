import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent {
  @Input() setup = '';
  @Input() delivery = '';
  @Output() fetchNextJoke: EventEmitter<any> = new EventEmitter();

  deliveryIsVisible = false

  showDelivery(): void {
    this.deliveryIsVisible = true
  }

  getNextJoke(): void {
    this.fetchNextJoke.emit()
  }
}
