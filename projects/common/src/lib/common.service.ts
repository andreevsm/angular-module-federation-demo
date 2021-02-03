import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  user = {
    login: 'Guest',
  }

  constructor() { }
}
