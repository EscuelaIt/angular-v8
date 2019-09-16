import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { User } from './../models/user.model';

interface ResponseUsers {
  results: User[];
  info: any;
}

@Injectable()
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(results: number = 5) {
    return this.http.get<ResponseUsers>(`https://randomuser.me/api?results=${results}`)
    .pipe(
      map(response => response.results),
      // map(users => users.map(user => {
      //   user.email = 'asasas';
      //   return user;
      // })),
    );
  }
}
