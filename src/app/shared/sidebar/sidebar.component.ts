import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';

import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public user: SocialUser;
  constructor(
    private authService: AuthService,
    public router: Router,
  ) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('Usuario')) === null) {
      this.router.navigate(['/auth']);
    } else {
      this.user = JSON.parse(localStorage.getItem('Usuario'));
    }
  }

  logout() {
    // console.log('click')
    // this.authService.logout();
    this.authService.signOut();
    localStorage.clear();
    localStorage.removeItem('Usuario');
    this.router.navigate(['/auth']);


  }

}
