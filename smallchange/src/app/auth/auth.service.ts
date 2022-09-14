import { Injectable } from '@angular/core';
import { RegPageComponent } from '../pages/reg-page/reg-page.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = true;

  constructor() { }
  
  isAuthenticated(){
    return this.isLoggedIn;
  }
}
