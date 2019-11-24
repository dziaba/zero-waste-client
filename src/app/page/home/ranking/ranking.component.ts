import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {


  constructor() { }
  userk = [];
  ngOnInit() {
    this.userk.push({ login: 'Adams', password: '123g456', email: 'przydk2@domena.pl', name: 'Adam', surename: 'Nowak', punkty: '20' });
    this.userk.push({ login: 'Kowalska', password: '1123456', email: 'lad@dmn.pl', name: 'Agata', surename: 'Kowaliczena', punkty: '15' });
    this.userk.push({ login: 'Dorotka', password: 'jksdjq4', email: 'idoraad@domena.pl', name: 'Dorota', surename: 'Owcarz', punkty: '2' });
  }
}
