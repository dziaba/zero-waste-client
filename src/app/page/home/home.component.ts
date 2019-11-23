import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { KnowladgeComponent } from './knowladge/knowladge.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  recommend(){
    this._router.navigate(['/recommend']);
  }

  knowladge(){
    this._router.navigate(['/knowladge']);
  }
  zeroWaste(){
    this._router.navigate(['/zero-waste']);
  }
  profile(){
    this._router.navigate(['/profile']);
  }

  contact(){
    this._router.navigate(['/contact']);
  }

  rankings(){
    this._router.navigate(['/ranking']);
  }
}

