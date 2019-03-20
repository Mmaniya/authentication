import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: SocialUser;
  users: any;
  group_count: any;

  constructor(private authService: AuthService,private httpClient: HttpClient) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });

    this.httpClient.get('http://localhost:3000/users').subscribe((data) => {
      this.users = data;
    });

    this.httpClient.get('http://localhost:3000/users/group_count').subscribe((group_count) => {
      this.group_count = group_count;
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(this.user);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
