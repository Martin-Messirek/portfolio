import { TranslateLoader } from '@ngx-translate/core';
import { TRANSLATIONS } from './translation';
import { Observable, of } from 'rxjs';

export class CustomTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(TRANSLATIONS[lang]); // Return as Observable
  }
}
// This is needed because ngx-translate expects a TranslateLoader to return data.
// ngx-translate expects an Observable because it normally loads JSON files via HTTP.
