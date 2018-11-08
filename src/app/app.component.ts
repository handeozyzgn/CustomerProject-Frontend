import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User App';
}
/*
import { Component, Input, OnInit } from '@angular/core';
import { User } from './model/User';
import { UserApiService } from './service/user-api.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CustomerProject-Frontend';
  newUser: User = new User();

  constructor(private userService: UserApiService) { }
  ngOnInit(): void {

  }

  creatUser(form: NgForm): void {
    this.userService.creatUser(this.newUser)
      .then(creatUser => {
        form.reset();
        this.newUser = new User();
        this.users.unshift(creatUser);
      });
  }
}
  */
   /*u1: User = new User('Davis', 'Molinari', 'Italy', 34);
  u2: User = new User('Lionel', 'Messi', 'Argentina', 30);
  u3: User = new User('Jason', 'Bourne', 'US', 30);
  users: User[] = [this.u1, this.u2, this.u3];*/

