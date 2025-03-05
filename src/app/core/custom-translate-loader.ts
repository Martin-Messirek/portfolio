/**
 * Custom translation loader for ngx-translate.
 *
 * This class provides translations from a predefined object instead of fetching them via HTTP.
 * It implements the `TranslateLoader` interface required by ngx-translate.
 *
 * ngx-translate requires a `TranslateLoader` to supply translation data dynamically.
 * By default, ngx-translate loads translations from external JSON files via HTTP.
 * Since this custom loader retrieves translations from a local object, it must still return an `Observable`
 * to conform to ngx-translate's expected behavior.
 * This file is needed because ngx-translate expects a TranslateLoader to return data.
 * ngx-translate expects an Observable because it normally loads JSON files via HTTP.
 */
import { TranslateLoader } from '@ngx-translate/core';
import { TRANSLATIONS } from './translation';
import { Observable, of } from 'rxjs';

export class CustomTranslateLoader implements TranslateLoader {
	getTranslation(lang: string): Observable<any> {
		return of(TRANSLATIONS[lang]);
	}
}
