import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit {

  constructor(private _router: Router ) { }

  ngOnInit() {
    
  }

  home() {
    this._router.navigate(['/home']);
  }

}
