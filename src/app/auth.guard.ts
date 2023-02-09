import { Injectable } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(/*private sfAuth: AngularFireAuth*/) {}

  canActivate(
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return new Promise((resolve, reject) => {
    //   this.sfAuth.onAuthStateChanged((user) => {
    //     if(user) {
    //       resolve(true);
    //     }
    //     else {
    //       console.log("user not logged in");
    //       resolve(false);
    //     }
    //   })
    // });
  ){return true;
  }
  
}
