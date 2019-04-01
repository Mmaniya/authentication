import { Component, OnInit } from '@angular/core';


import { Router } from "@angular/router";
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-oauth-init',
  templateUrl: './oauth-init.component.html',
  styleUrls: ['./oauth-init.component.css']
})
export class OauthInitComponent implements OnInit {

  user: SocialUser;
  private loggedIn: boolean;
  users: any;
  group_count: any;

  constructor(private authService: AuthService,private router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.http.post('http://localhost:3000/users',this.user).subscribe((data) => {
      this.users = data;
    });
      this.loggedIn = (user != null);
      this.count();
    });
  }

  count(){
    
    this.http.get('http://localhost:3000/users/count').subscribe((group_count) => {
      this.group_count = group_count;
      console.log(this.group_count);
    });
  }

  signOut(): void {
    this.user = null;
    this.authService.signOut();
    this.router.navigate(["login"]);
  }

}
