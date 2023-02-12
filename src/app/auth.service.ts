import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn: boolean = false;
  userId: string = ""

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.onAuthStateChanged( (user) => {
      if(user) {
        this.userLoggedIn = true;
        this.userId = user.uid;
      }
      else {
        this.userLoggedIn = false;
        this.router.navigate(['login']);
        this.userId = "";
      }
    });
  }

  signupUser(email: string, password: string): Promise<any>{
    return this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => {
      this.router.navigate(['']);
    }).catch(error => {
      console.log("signup error", error)
      return { isValid: false, message: error.message }
    })
  }

  loginUser(email: string, password: string): Promise<any>{
    return this.afAuth.signInWithEmailAndPassword(email, password).then(() => {
      console.log("success");
      this.router.navigate(['']);
    }).catch(error => {
      console.log("login error");
      console.log("code: " + error.code);
      console.log("error: " + error);
      alert("Wrong username or passowrd");
      return { isValid: false, message: error.message };
    });
  }

  logoutUser(){
    this.afAuth.signOut();
  }

  get currentUserId(): string {
    //return this.isAuthenticated ? this.authState.uid : null;
    return this.userId;
  }
}
