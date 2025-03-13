import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [TranslatePipe, CommonModule, RouterModule],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	private scrollService = inject(ScrollService);
	isMenuOpen = false;
	currentLang: string = localStorage.getItem('language') || 'en';

	constructor(private translationService: TranslationService) {}

	toggleLanguage(lang: string) {
		if (this.currentLang !== lang) {
			this.translationService.toggleLanguage();
			this.currentLang = lang;
		}
	}

	toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen;

		if (this.isMenuOpen) {
			this.scrollService.disableScroll();
		} else {
			this.scrollService.enableScroll();
		}
	}
}
