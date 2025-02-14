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

	currentLang: 'en' | 'de' = 'en';

	toggleLanguage(lang: 'en' | 'de') {
		this.translationService.toggleLanguage();
		this.currentLang = lang;
	}
}
