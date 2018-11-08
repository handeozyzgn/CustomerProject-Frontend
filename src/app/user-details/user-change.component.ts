import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/User';
import { UserApiService } from '../service/user-api.service';

@Component({  templateUrl: './user-change.component.html'

})
export class UserChangeComponent implements OnInit {

    users: User[];
    newUser: User = new User();

    constructor(private router: Router, private userService: UserApiService) {}

    ngOnInit() {
        this.userService.getUsers()
        .subscribe( data => {
            this.users = data;
        });
    }

    changeUser(user: User): void {
    this.userService.changeUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }

}
