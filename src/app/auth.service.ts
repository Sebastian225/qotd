import { Injectable } from '@angular/core';
//import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn: boolean = false;

  constructor(/*private afAuth: AngularFireAuth*/) {
    // this.afAuth.onAuthStateChanged((user) => {
    //   if(user) {
    //     this.userLoggedIn = true;
    //   }
    //   else {
    //     this.userLoggedIn = false;
    //   }
    // })
  }

  // signupUser(user: any): Promise<any>{
  //   return this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then((result) => {

  //   }).catch(error => {
  //     console.log("signup error", error)
  //     return { isValid: false, message: error.message }
  //   })
  // }

  // loginUser(email: string, password: string): Promise<any>{
  //   return this.afAuth.signInWithEmailAndPassword(email, password).then(() => {
  //     console.log("success")
  //   }).catch(error => {
  //     console.log("login error");
  //     console.log("code: " + error.code);
  //     console.log("error: " + error);
  //     return { isValid: false, message: error.message };
  //   });
  // }
}
