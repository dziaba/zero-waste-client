import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  xd: string;

  constructor() { }

  ngOnInit() {
  }

  wysli(tekst: any, typ: any) {
    console.log('YEEEEEEEEEEEEEEEEEET ' + typ.value + '   ' + tekst.value);
  }
}
