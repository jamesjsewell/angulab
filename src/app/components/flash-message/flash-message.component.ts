import { Component, Input } from '@angular/core';
import { FlashMessageTypes} from '../../constants'

@Component({
  selector: 'flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.scss'],
})
export class FlashMessageComponent {
  @Input() message = '';
  @Input() type: FlashMessageTypes = FlashMessageTypes.SUCCESS;
}
