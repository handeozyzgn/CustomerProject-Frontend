import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/User';
import { UserApiService } from '../service/user-api.service';

@Component({  templateUrl: './user-add.component.html'

})
export class UserAddComponent {

  user: User = new User();

  constructor(private router: Router, private userService: UserApiService) {

  }

  createUser(): void {
    this.userService.createUser(this.user)
        .subscribe( data => {
          alert('User created successfully.');
        });

  }

}
