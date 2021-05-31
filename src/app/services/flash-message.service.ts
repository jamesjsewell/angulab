import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FlashMessage } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class FlashMessageService {
  private readonly _messages: BehaviorSubject<FlashMessage[]> = new BehaviorSubject<FlashMessage[]>([]);
  readonly messages$: Observable<FlashMessage[]> = this._messages.asObservable()

  private get messages(): FlashMessage[] {
    return this._messages.getValue()
  }

  private set messages(val: FlashMessage[]) {
    this._messages.next(val)
  }

  addMessage(message: FlashMessage): void {
    this.messages = [...this.messages, message]

    setTimeout(()=>this.clearMessage(message.id), 4000)
  }

  private clearMessage(flashMessageId: string): void {
    this.messages = this.messages.filter(msg=>{
      if(msg.id !== flashMessageId) return msg
      return null
    })
  }
}
