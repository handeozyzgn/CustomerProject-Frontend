import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/User';
import { UserApiService } from '../service/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
   users: User[];
   // @Input() user: User;

  constructor(private router: Router, private userService: UserApiService) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  }
  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }
  /*
  ngOnInit() {
    this.userService.getUsers().then(u => this.users = u);
  }*/

}
