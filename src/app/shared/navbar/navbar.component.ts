import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user: SocialUser;
  public loggedIn: boolean;
  constructor(
    public authService: AuthService,
    public router: Router,

    ) { }

  ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   console.log(user);
    //   this.user = user;
    //   this.loggedIn = (user != null);
    //   console.log(this.user);
    // });
    if (JSON.parse(localStorage.getItem('Usuario')) === null) {
      this.router.navigate(['/auth']);
    } else {
      this.user = JSON.parse(localStorage.getItem('Usuario'));
    }
  }

}
