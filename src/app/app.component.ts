import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlashMessage } from './constants'
import { FlashMessageService } from './services/flash-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'my-app';
  flashMessages: FlashMessage[] = []

  constructor(public flashMessageService: FlashMessageService){
  }

}
