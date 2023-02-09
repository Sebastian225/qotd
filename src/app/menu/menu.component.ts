import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userLoggedIn: boolean;

  constructor(private _authService: AuthService) {
    this.userLoggedIn = _authService.userLoggedIn;
  }

  ngOnInit(): void {
  }

}
