import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { LoginCommunicationService } from 'src/app/services/login-communication.service';
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
    this.zapytaniereg(this.logusr, 'login');
    // odwołuję się do serwisu teraz i czekam na odpowiedź
  }
  wyslijrej(): void {
    if (this.logusr.login.length > 0 && this.logusr.password.length > 5 && this.mailtest.test(this.logusr.email.toLowerCase())) {
      // wszystko zamknij w funkcji która czeka na powrót czy użytkownik o danym loginie lub mailu istnieje
      console.log('O CHUJ');
      this.zapytaniereg(this.logusr, 'register');
      // koniec zamknięcia
    } else {
      console.log('I CHUJ');
    }
  }

  zapytaniereg(dane: any, fix: string) {
    this.serwerkurwa.postuser(this.logusr, fix).subscribe((odpo: User) => this.udane(odpo), (err: any) => this.error(err));
  }

  udane(xd: any) {
    console.log('dziala');
    console.log(xd);
  }

  error(xd: any) {
    console.log('niedziala');
    console.log(xd);
  }
}
