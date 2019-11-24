import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  images: any[]; 
  constructor() { }

  
  ngOnInit() {
    this.images = [];
    this.images.push({source:'/assets/images/drewno.jpg', alt:"koszyk", title:'koszyk', width:'400px', height:'300px'});
    this.images.push({source:'/assets/images/wino.jpg', alt:"wino", title:'wino'});
    this.images.push({source:'/assets/images/wino2.jpg', alt:"wino2", title:'wino2'});
    this.images.push({source:'/assets/images/pufa.jpg', alt:"pufa", title:'pufa'});
  }
  
}
