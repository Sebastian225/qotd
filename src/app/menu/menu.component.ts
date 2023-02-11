import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userLoggedIn: boolean = false;

  constructor(private afAuth: AngularFireAuth, private authService: AuthService) {
    this.afAuth.onAuthStateChanged((user) => {
      if(user) {
        this.userLoggedIn = true;
      }
      else {
        this.userLoggedIn = false;
      }
    })
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logoutUser();
  }

}
