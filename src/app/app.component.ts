import { Component } from '@angular/core';
import { LanguageType } from './core/enums/language-type';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zero-waste';

  constructor(private _translate: TranslateService) {
    let lang = LanguageType.PL;
    _translate.setDefaultLang(lang);
    _translate.use(lang);
  }
}
