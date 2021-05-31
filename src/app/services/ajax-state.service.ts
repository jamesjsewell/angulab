import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AjaxStateService {
    private _fetching = false;

    set fetching(isFetching: boolean) {
        this._fetching = isFetching
    }
     
    get fetching(){ 
        return this._fetching
    }
}
