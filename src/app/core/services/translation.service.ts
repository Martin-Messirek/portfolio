import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { TRANSLATIONS } from '../../core/translation';
@Injectable({ providedIn: 'root' })
export class TranslationService {
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);
  }
  setLanguage(lang: 'en' | 'de'): void {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
  toggleLanguage(): void {
    const newLang = this.translate.currentLang === 'en' ? 'de' : 'en';
    this.setLanguage(newLang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
