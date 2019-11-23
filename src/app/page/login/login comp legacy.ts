/*import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { LoginCommunicationService } from 'src/app/services/login-communication.service';
import {MatFormFieldControl} from '@angular/material/form-field';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  reje = false;
  logusr = new User();
  mailtest = new RegExp('@');
  constructor(private serwerkurwa: LoginCommunicationService) { }
  ngOnInit() {
  }
  zareje(): void {
    this.reje = true;
  }

  wyslijlog(): void {
    console.log('log');
    // odwołuję się do serwisu teraz i czekam na odpowiedź
  }
  wyslijrej(): void {
    if (this.logusr.login.length > 0 && this.logusr.password.length > 5 && this.mailtest.test(this.logusr.email.toLowerCase())) {
      // wszystko zamknij w funkcji która czeka na powrót czy użytkownik o danym loginie lub mailu istnieje
      console.log('O CHUJ');
      this.zapytanie(this.logusr);
      // koniec zamknięcia
    } else {
      console.log('I CHUJ');
    }
  }

  zapytanie(dane: any) {
    this.serwerkurwa.getuser(this.logusr).subscribe((odpo: any) => this.udane(odpo));
  }

  udane(xd: any) {

  }
}
*/
