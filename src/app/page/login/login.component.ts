import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { LoginCommunicationService } from 'src/app/services/login-communication.service';
import { LoginService } from 'src/app/services/login.service';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  reje = false;
  logusr = new User();
  mailtest = new RegExp('@');
  constructor(private _router: Router, private loginservice: LoginService) { }
  ngOnInit() {
  }
  zareje(): void {
    this.reje = true;
  }

  zalog(a: string, b: string): void {
    this.logusr.login = a;
    this.logusr.password = b;
    if (b.length > 5) {
      if (a === this.loginservice.userik.login && b === this.loginservice.userik.password) {
        this.loginservice.zapiszlogin();
        this._router.navigate(['/home']);
      } else {
        this._router.navigate(['/login']);
      }
    }
  }

  rejestr(a: string, b: string, c: string, d: string, e: string): void {
    this.logusr.login = a;
    this.logusr.password = b;
    this.logusr.email = c;
    this.logusr.name = d;
    this.logusr.surename = e;
    if (b.length > 5 && this.mailtest.test(this.logusr.email.toLowerCase())) {
      this.loginservice.zapiszrejes(this.logusr);
      this._router.navigate(['/home']);
    }
  }
}
