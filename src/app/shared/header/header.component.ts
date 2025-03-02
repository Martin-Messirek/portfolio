import { Component, Renderer2 } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [TranslatePipe, CommonModule, RouterModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	constructor(
		private translationService: TranslationService,
		private renderer: Renderer2, // Renderer2 für DOM-Manipulation
	) {}
	isMenuOpen = false;
	currentLang: string = localStorage.getItem('language') || 'en';

	toggleLanguage(lang: string) {
		if (this.currentLang !== lang) {
			this.translationService.toggleLanguage();
			this.currentLang = lang;
		}
	}

	toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen;

		if (this.isMenuOpen) {
			console.log('+ + + + + Menu open!!!!');

			this.renderer.addClass(document.body, 'no-scroll');
			document.documentElement.style.setProperty('--scrollbar-thumb', 'var(--bg-color)');
			document.documentElement.style.setProperty('--scrollbar-thumb-hover', 'var(--bg-color)');
			document.documentElement.style.setProperty('--scrollbar-cursor', 'default'); // Scrollbar verdunkeln
		} else {
			console.log('- - - - - Menu closed!!!!');
			this.renderer.removeClass(document.body, 'no-scroll');
			document.documentElement.style.removeProperty('--scrollbar-thumb');
			document.documentElement.style.removeProperty('--scrollbar-thumb-hover');
			document.documentElement.style.removeProperty('--scrollbar-cursor'); // Scrollbar zurücksetzen
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
