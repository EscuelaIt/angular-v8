import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private authFire: AngularFireAuth
  ) { }

  login(email: string, password: string) {
    return this.authFire.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    return this.authFire.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.authFire.auth.signOut();
  }

  hasSession(): Observable<boolean> {
    return this.authFire.authState
    .pipe(
      map(user => user === null ? false : true)
    );
  }
}
