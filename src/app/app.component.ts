import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   /* this.authService.authState.subscribe((user) => {
      this.user = user;
    });

    this.httpClient.get('http://localhost:3000/users').subscribe((data) => {
      this.users = data;
    });

    this.httpClient.get('http://localhost:3000/users/group_count').subscribe((group_count) => {
      this.group_count = group_count;
    });*/
  }

 
  
}
