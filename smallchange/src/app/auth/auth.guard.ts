import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){};
  
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {

    console.log('CanActivate called');

    let isLoggedIn = this.authService.isAuthenticated();
    
    if (isLoggedIn) return true;
    else this.router.navigate(['/']);
  }
}
