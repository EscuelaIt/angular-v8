import { Component, OnInit } from '@angular/core';

import { UsersService } from '@users/services/users.service';

import { User } from '@users/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  limit: number;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }

  fetchUsers() {
    console.log(this.limit);
    this.usersService.getAllUsers(this.limit)
    .subscribe(users => {
      this.users = users;
    });
  }

}
