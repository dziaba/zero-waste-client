import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgModule } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {


  constructor(private loginservice: LoginService) { }
  zalogow = this.loginservice.userik;
  userk = [];
  ngOnInit() {
    this.userk.push({ login: 'Adams', password: '123g456', email: 'przydk2@domena.pl', name: 'Adam', surename: 'Nowak', punkty: '20' });
    this.userk.push({ login: 'Kowalska', password: '1123456', email: 'lad@dmn.pl', name: 'Agata', surename: 'Kowaliczena', punkty: '15' });
    this.userk.push({ login: 'Dorotka', password: 'jksdjq4', email: 'idoraad@domena.pl', name: 'Dorota', surename: 'Owcarz', punkty: '2' });
    if (this.zalogow.aktywny === true) { this.wczytanielisty(); }

  }

  wczytanielisty() {
    console.log("Test");
    let a = 0;
    let b = 0;
    while (a < this.userk.length) {
      while (b < this.zalogow.followy.length) {
        if (this.userk[a] === this.zalogow.followy[b]) {
          console.log("MAM CIEBIE");
        }
        b++;
      }
      a++;
    }
  }

  dawanieplusa(x) {
    console.log(x);
    let a = 0;
    while (a < this.zalogow.followy.length) {
      if (this.zalogow.followy[a] === x) {
        a = 1000;
      }
      a++;
    }
    if (a === 1000) {
      this.zalogow.followy.splice(a,1);
    } else {
      this.zalogow.followy.push(x);
    }
    this.wczytanielisty();
  }


}
