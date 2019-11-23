import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router, private loginservice: LoginService) { }

  uzyt: User;

  ngOnInit() {
    this.polacz();
  }

  polacz(): void {
    this.loginservice.userlogin().subscribe(xd => this.uzyt = xd);
  }

  home() {
    this._router.navigate(['/home']);
  }
  plogon() {
    this._router.navigate(['/login']);
  }
}
