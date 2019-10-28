import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';

import { SocialUser } from 'angularx-social-login';

import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  private loggedIn: boolean;

  constructor(
    // public  authService:AuthService
    private authService: AuthService,
    public router: Router,
  ) { }

  // onSubmit(data:any){
  //   console.log(data);
  //   this.authService.login(data.email, data.password);

  // }

  ngOnInit() {

  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    console.log(JSON.parse(localStorage.getItem('Usuario')));
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        this.router.navigate(['/']);
        localStorage.setItem('Usuario', JSON.stringify(this.user));
      }
    });
  }

  signOut(): void {
    this.authService.signOut();


  }
}
