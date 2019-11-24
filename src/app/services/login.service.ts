import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userik: User = {
    login: 'Kowal',
    password: '123456',
    email: 'przyklad@domena.pl',
    name: 'Jan',
    surename: 'Kowalski',
    followy: [],
  };

  zapiszlogin() {
    this.userik.aktywny = true;
  }

  zapiszrejes(a: User) {
    this.userik.login = a.login;
    this.userik.password = a.password;
    this.userik.email = a.email;
    this.userik.name = a.name;
    this.userik.surename = a.surename;
    this.userik.aktywny = true;
  }

  userlogin(): Observable<User> {
    return of(this.userik);
  }

  constructor() { }

}
