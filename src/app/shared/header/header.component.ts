import { Component } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [TranslatePipe, CommonModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	constructor(private translationService: TranslationService) {}

	currentLang: string = localStorage.getItem('language') || 'en';

	toggleLanguage(lang: string) {
		if (this.currentLang !== lang) {
			this.translationService.toggleLanguage();
			this.currentLang = lang;
		}
	}
}

// import { Component } from '@angular/core';
// import { TranslationService } from '../../core/services/translation.service';
// import { TranslatePipe } from '@ngx-translate/core';
// import { CommonModule } from '@angular/common';

// @Component({
// 	selector: 'app-header',
// 	standalone: true,
// 	imports: [TranslatePipe, CommonModule],
// 	templateUrl: './header.component.html',
// 	styleUrl: './header.component.scss',
// })
// export class HeaderComponent {
// 	constructor(private translationService: TranslationService) {}

// 	currentLang: string = 'en';

// 	toggleLanguage() {
// 		this.translationService.toggleLanguage();
// 		this.currentLang = this.translationService.getCurrentLanguage();
// 	}
// }
