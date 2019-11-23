import { Component, OnInit } from '@angular/core';
import { LanguageType } from './core/enums/language-type';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zero-waste';
  ngOnInit(): void {
  }

  constructor(private _translate: TranslateService) {
    let lang = LanguageType.PL;
    _translate.setDefaultLang(lang);
    _translate.use(lang);
  }
}
